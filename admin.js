const repo = {
  owner: "JawadShakkour",
  name: "Shawarma-khazen-menu",
  branch: "main",
};

const tokenInput = document.querySelector("#githubToken");
const rememberTokenInput = document.querySelector("#rememberToken");
const form = document.querySelector("#dishForm");
const statusElement = document.querySelector("#adminStatus");
const categorySelect = document.querySelector("#categorySelect");

const savedToken = localStorage.getItem("shawarmaKhazenGithubToken");
if (savedToken) {
  tokenInput.value = savedToken;
  rememberTokenInput.checked = true;
}

function setStatus(message, type = "") {
  statusElement.textContent = message;
  statusElement.className = `admin-status ${type}`.trim();
}

function utf8ToBase64(value) {
  return btoa(unescape(encodeURIComponent(value)));
}

function base64ToUtf8(value) {
  return decodeURIComponent(escape(atob(value)));
}

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

function categoryKeyFromEnglish(value) {
  const slug = slugify(value);
  return slug.replace(/-([a-z0-9])/g, (_, char) => char.toUpperCase()) || `category${Date.now()}`;
}

function parseMenuFile(content) {
  const match = content.match(/const\s+menuItems\s*=\s*([\s\S]*);\s*$/);
  if (!match) throw new Error("Could not read data/menu.js.");
  return Function(`"use strict"; return (${match[1]});`)();
}

function serializeMenuFile(items) {
  return `const menuItems = ${JSON.stringify(items, null, 2)};\n`;
}

async function githubRequest(path, options = {}) {
  const response = await fetch(`https://api.github.com/repos/${repo.owner}/${repo.name}/contents/${path}`, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${tokenInput.value.trim()}`,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.headers || {}),
    },
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || "GitHub request failed.");
  }
  return data;
}

async function loadMenuFromGithub() {
  const file = await githubRequest("data/menu.js?ref=main");
  return {
    items: parseMenuFile(base64ToUtf8(file.content.replace(/\n/g, ""))),
    sha: file.sha,
  };
}

function populateCategories(items) {
  const categories = new Map();
  items.forEach((item) => {
    if (!categories.has(item.categoryKey)) {
      categories.set(item.categoryKey, item.category);
    }
  });

  categorySelect.innerHTML = '<option value="">Create new category</option>';
  categories.forEach((category, key) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = `${category.he || category.en} / ${category.en || category.he}`;
    categorySelect.append(option);
  });
}

async function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(String(reader.result).split(",")[1]));
    reader.addEventListener("error", () => reject(new Error("Could not read image file.")));
    reader.readAsDataURL(file);
  });
}

function getSelectedCategory(items) {
  if (categorySelect.value) {
    const existing = items.find((item) => item.categoryKey === categorySelect.value);
    return {
      key: existing.categoryKey,
      value: existing.category,
    };
  }

  const category = {
    he: document.querySelector("#categoryHe").value.trim(),
    ar: document.querySelector("#categoryAr").value.trim(),
    en: document.querySelector("#categoryEn").value.trim(),
  };

  if (!category.he || !category.ar || !category.en) {
    throw new Error("Fill all three category names or choose an existing category.");
  }

  return {
    key: categoryKeyFromEnglish(category.en),
    value: category,
  };
}

function buildDescriptions(name) {
  return {
    he: name.he,
    ar: name.ar,
    en: name.en,
  };
}

async function addDish(event) {
  event.preventDefault();
  setStatus("Adding dish...");
  form.querySelector("button[type='submit']").disabled = true;

  try {
    if (rememberTokenInput.checked) {
      localStorage.setItem("shawarmaKhazenGithubToken", tokenInput.value.trim());
    } else {
      localStorage.removeItem("shawarmaKhazenGithubToken");
    }

    const { items, sha } = await loadMenuFromGithub();
    const imageFile = document.querySelector("#imageFile").files[0];
    if (!imageFile) throw new Error("Choose an image.");

    const name = {
      he: document.querySelector("#nameHe").value.trim(),
      ar: document.querySelector("#nameAr").value.trim(),
      en: document.querySelector("#nameEn").value.trim(),
    };

    if (!name.he || !name.ar || !name.en) {
      throw new Error("Fill the dish name in Hebrew, Arabic, and English.");
    }

    const price = Number(document.querySelector("#price").value);
    if (!Number.isFinite(price)) throw new Error("Enter a valid price.");

    const category = getSelectedCategory(items);
    const imageExtension = imageFile.name.split(".").pop() || "jpg";
    const imagePath = `images/${slugify(name.en)}-${Date.now()}.${imageExtension}`;
    const nextId = items.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1;

    await githubRequest(imagePath, {
      method: "PUT",
      body: JSON.stringify({
        message: `Add image for ${name.en}`,
        content: await fileToBase64(imageFile),
        branch: repo.branch,
      }),
    });

    items.push({
      id: nextId,
      name,
      description: buildDescriptions(name),
      fullDescription: buildDescriptions(name),
      price,
      currency: "₪",
      categoryKey: category.key,
      category: category.value,
      image: imagePath,
      badge: {
        he: "חדש",
        ar: "جديد",
        en: "New",
      },
      available: true,
      vegetarian: false,
      spicy: false,
    });

    await githubRequest("data/menu.js", {
      method: "PUT",
      body: JSON.stringify({
        message: `Add ${name.en}`,
        content: utf8ToBase64(serializeMenuFile(items)),
        sha,
        branch: repo.branch,
      }),
    });

    const shouldRememberToken = rememberTokenInput.checked;
    form.reset();
    rememberTokenInput.checked = shouldRememberToken;
    if (shouldRememberToken) tokenInput.value = localStorage.getItem("shawarmaKhazenGithubToken") || "";
    await refreshCategories();
    setStatus("Dish added. Netlify will deploy it in about 1-2 minutes.", "success");
  } catch (error) {
    setStatus(error.message, "error");
  } finally {
    form.querySelector("button[type='submit']").disabled = false;
  }
}

async function refreshCategories() {
  try {
    if (!tokenInput.value.trim()) return;
    const { items } = await loadMenuFromGithub();
    populateCategories(items);
  } catch {
    categorySelect.innerHTML = '<option value="">Create new category</option>';
  }
}

tokenInput.addEventListener("change", refreshCategories);
form.addEventListener("submit", addDish);
populateCategories([]);
refreshCategories();
