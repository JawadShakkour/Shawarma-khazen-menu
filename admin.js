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
const pendingList = document.querySelector("#pendingList");
const pushButton = document.querySelector("#pushButton");
const pendingDishes = [];
const localMenuItems = JSON.parse(JSON.stringify(typeof menuItems === "undefined" ? [] : menuItems));

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
  const token = tokenInput.value.trim();
  if (!token) throw new Error("Paste your GitHub token before pushing.");

  const response = await fetch(`https://api.github.com/repos/${repo.owner}/${repo.name}/contents/${path}`, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
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

function getAllKnownItems() {
  return [...localMenuItems, ...pendingDishes.map((dish) => dish.item)];
}

function populateCategories(items = getAllKnownItems()) {
  const categories = new Map();
  items.forEach((item) => {
    if (!categories.has(item.categoryKey)) {
      categories.set(item.categoryKey, item.category);
    }
  });

  const selectedValue = categorySelect.value;
  categorySelect.innerHTML = '<option value="">Create new category</option>';
  categories.forEach((category, key) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = `${category.he || category.en} / ${category.en || category.he}`;
    categorySelect.append(option);
  });
  categorySelect.value = selectedValue;
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

function updatePendingList() {
  if (!pendingDishes.length) {
    pendingList.innerHTML = "<p>No pending dishes yet.</p>";
  } else {
    pendingList.innerHTML = pendingDishes
      .map(
        ({ item }, index) => `
          <article class="pending-item">
            <span>
              <strong>${item.name.he}</strong>
              <small>${item.name.ar} / ${item.name.en}</small>
            </span>
            <span>₪${item.price}</span>
            <button type="button" data-remove-pending="${index}">Remove</button>
          </article>
        `
      )
      .join("");
  }

  pushButton.disabled = pendingDishes.length === 0;
}

function addDish(event) {
  event.preventDefault();

  try {
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

    const category = getSelectedCategory(getAllKnownItems());
    const imageExtension = imageFile.name.split(".").pop() || "jpg";
    const imagePath = `images/${slugify(name.en)}-${Date.now()}.${imageExtension}`;
    const nextId = getAllKnownItems().reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1;

    const item = {
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
    };

    pendingDishes.push({ item, imageFile });
    const tokenValue = tokenInput.value;
    const shouldRememberToken = rememberTokenInput.checked;
    if (shouldRememberToken && tokenValue.trim()) {
      localStorage.setItem("shawarmaKhazenGithubToken", tokenValue.trim());
    }
    form.reset();
    tokenInput.value = tokenValue;
    rememberTokenInput.checked = shouldRememberToken;
    populateCategories();
    updatePendingList();
    setStatus("Dish added to pending list. Press Push changes when you are ready.", "success");
  } catch (error) {
    setStatus(error.message, "error");
  }
}

async function refreshCategories() {
  populateCategories();
}

async function pushChanges() {
  setStatus("Pushing pending dishes...");
  pushButton.disabled = true;
  form.querySelector("button[type='submit']").disabled = true;

  try {
    if (!pendingDishes.length) throw new Error("There are no pending dishes to push.");

    if (rememberTokenInput.checked) {
      localStorage.setItem("shawarmaKhazenGithubToken", tokenInput.value.trim());
    } else {
      localStorage.removeItem("shawarmaKhazenGithubToken");
    }

    const { items, sha } = await loadMenuFromGithub();
    let nextId = items.reduce((maxId, item) => Math.max(maxId, item.id), 0) + 1;

    for (const pendingDish of pendingDishes) {
      pendingDish.item.id = nextId;
      nextId += 1;

      await githubRequest(pendingDish.item.image, {
        method: "PUT",
        body: JSON.stringify({
          message: `Add image for ${pendingDish.item.name.en}`,
          content: await fileToBase64(pendingDish.imageFile),
          branch: repo.branch,
        }),
      });

      items.push(pendingDish.item);
    }

    await githubRequest("data/menu.js", {
      method: "PUT",
      body: JSON.stringify({
        message: `Add ${pendingDishes.length} menu item${pendingDishes.length === 1 ? "" : "s"}`,
        content: utf8ToBase64(serializeMenuFile(items)),
        sha,
        branch: repo.branch,
      }),
    });

    localMenuItems.splice(0, localMenuItems.length, ...items);
    pendingDishes.splice(0, pendingDishes.length);
    populateCategories();
    updatePendingList();
    setStatus("Pushed. Netlify will deploy the changes in about 1-2 minutes.", "success");
  } catch (error) {
    setStatus(error.message, "error");
  } finally {
    pushButton.disabled = pendingDishes.length === 0;
    form.querySelector("button[type='submit']").disabled = false;
  }
}

pendingList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-pending]");
  if (!button) return;

  pendingDishes.splice(Number(button.dataset.removePending), 1);
  populateCategories();
  updatePendingList();
  setStatus("Pending dish removed.");
});

rememberTokenInput.addEventListener("change", () => {
  if (rememberTokenInput.checked && tokenInput.value.trim()) {
    localStorage.setItem("shawarmaKhazenGithubToken", tokenInput.value.trim());
  }
});

tokenInput.addEventListener("change", refreshCategories);
form.addEventListener("submit", addDish);
pushButton.addEventListener("click", pushChanges);
populateCategories();
updatePendingList();
