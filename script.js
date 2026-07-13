const activeMenuItems = typeof menuItems === "undefined" ? [] : menuItems;

const uiText = {
  he: {
    all: "הכל",
    available: "זמין",
    unavailable: "לא זמין",
    fresh: "טרי",
    itemSingular: "מנה מוצגת",
    itemPlural: "מנות מוצגות",
    priceComingSoon: "המחיר יעודכן בקרוב",
    searchPlaceholder: "חפש שווארמה, שתייה...",
    heroEyebrow: "שווארמה טרייה על האש",
    heroDescription: "תפריט דיגיטלי לשווארמה חאזן עם מנות טריות, תמונות ומחירים.",
    hours: "פתוח היום: 11:00 - 23:00",
    menuEyebrow: "תפריט QR",
    menuTitle: "תפריט",
    searchLabel: "חיפוש בתפריט",
    emptyTitle: "לא נמצאו מנות.",
    emptyText: "נסה חיפוש אחר או בחר קטגוריה אחרת.",
    footerPhone: "טלפון: +000 000 0000",
    footerAddress: "כתובת: כתובת המסעדה",
    footerCopyright: "© 2026 Shawarma Khazen. כל הזכויות שמורות.",
    closeModal: "סגור פרטי מנה",
    viewItem: "פתח פרטי מנה",
  },
  ar: {
    all: "الكل",
    available: "متوفر",
    unavailable: "غير متوفر",
    fresh: "طازج",
    itemSingular: "صنف ظاهر",
    itemPlural: "أصناف ظاهرة",
    priceComingSoon: "سيتم تحديث السعر قريبًا",
    searchPlaceholder: "ابحث عن شاورما، مشروبات...",
    heroEyebrow: "شاورما طازجة على النار",
    heroDescription: "منيو رقمي لشاورما خازن مع وجبات طازجة، صور وأسعار.",
    hours: "مفتوح اليوم: 11:00 - 23:00",
    menuEyebrow: "منيو QR",
    menuTitle: "المنيو",
    searchLabel: "بحث في المنيو",
    emptyTitle: "لم يتم العثور على أصناف.",
    emptyText: "جرّب بحثًا آخر أو اختر فئة مختلفة.",
    footerPhone: "هاتف: +000 000 0000",
    footerAddress: "العنوان: عنوان المطعم",
    footerCopyright: "© 2026 Shawarma Khazen. جميع الحقوق محفوظة.",
    closeModal: "إغلاق تفاصيل الصنف",
    viewItem: "عرض تفاصيل الصنف",
  },
  en: {
    all: "All",
    available: "Available",
    unavailable: "Unavailable",
    fresh: "Fresh",
    itemSingular: "item shown",
    itemPlural: "items shown",
    priceComingSoon: "Price coming soon",
    searchPlaceholder: "Search shawarma, drinks...",
    heroEyebrow: "Fresh shawarma, grilled daily",
    heroDescription: "Digital menu for Shawarma Khazen with fresh dishes, photos, and prices.",
    hours: "Open today: 11:00 - 23:00",
    menuEyebrow: "QR Menu",
    menuTitle: "Menu",
    searchLabel: "Search menu",
    emptyTitle: "No menu items found.",
    emptyText: "Try another search or choose a different category.",
    footerPhone: "Phone: +000 000 0000",
    footerAddress: "Address: Restaurant address",
    footerCopyright: "© 2026 Shawarma Khazen. All rights reserved.",
    closeModal: "Close item details",
    viewItem: "View item details",
  },
};

const state = {
  language: "he",
  category: "all",
  query: "",
};

const categoryBar = document.querySelector("#categoryBar");
const menuGrid = document.querySelector("#menuGrid");
const searchInput = document.querySelector("#searchInput");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const modalBackdrop = document.querySelector("#modalBackdrop");
const modal = modalBackdrop.querySelector(".modal");
const closeModalButton = document.querySelector("#closeModal");
const languageButtons = document.querySelectorAll("[data-language]");

const categories = ["all", ...new Set(activeMenuItems.map((item) => item.categoryKey))];

function translate(value) {
  if (typeof value === "string") return value;
  return value?.[state.language] || value?.he || value?.en || "";
}

function formatPrice(item) {
  if (item.price === null || item.price === undefined) return uiText[state.language].priceComingSoon;
  return `${item.currency}${item.price.toFixed(2)}`;
}

function getCategoryLabel(categoryKey) {
  if (categoryKey === "all") return uiText[state.language].all;
  const item = activeMenuItems.find((menuItem) => menuItem.categoryKey === categoryKey);
  return translate(item?.category) || categoryKey;
}

function updateStaticText() {
  document.documentElement.lang = state.language;
  document.documentElement.dir = state.language === "en" ? "ltr" : "rtl";
  searchInput.placeholder = uiText[state.language].searchPlaceholder;
  closeModalButton.setAttribute("aria-label", uiText[state.language].closeModal);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = uiText[state.language][key];
  });

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === state.language));
  });
}

function renderCategories() {
  categoryBar.innerHTML = categories
    .map(
      (category) => `
        <button
          class="category-button"
          type="button"
          data-category="${category}"
          aria-pressed="${category === state.category}"
        >
          ${getCategoryLabel(category)}
        </button>
      `
    )
    .join("");
}

function getFilteredItems() {
  const query = state.query.trim().toLowerCase();

  return activeMenuItems.filter((item) => {
    const categoryMatch = state.category === "all" || item.categoryKey === state.category;
    const queryMatch =
      !query ||
      Object.values(item.name).some((name) => name.toLowerCase().includes(query)) ||
      Object.values(item.description).some((description) => description.toLowerCase().includes(query)) ||
      Object.values(item.category).some((category) => category.toLowerCase().includes(query));

    return categoryMatch && queryMatch;
  });
}

function renderMenu() {
  const items = getFilteredItems();

  menuGrid.innerHTML = items
    .map(
      (item) => `
        <button class="menu-card" type="button" data-id="${item.id}" aria-label="${uiText[state.language].viewItem}: ${translate(item.name)}">
          <img src="${item.image}" alt="${translate(item.name)}" loading="lazy" />
          <span class="card-body">
            <span class="card-topline">
              <span class="pill">${translate(item.category)}</span>
              ${item.badge ? `<span class="badge ${item.spicy ? "spicy" : ""}">${translate(item.badge)}</span>` : ""}
            </span>
            <span>
              <h3>${translate(item.name)}</h3>
              <p>${translate(item.description)}</p>
            </span>
            <span class="card-footer">
              <span class="price">${formatPrice(item)}</span>
              <span class="availability">${item.available ? uiText[state.language].available : uiText[state.language].unavailable}</span>
            </span>
          </span>
        </button>
      `
    )
    .join("");

  resultCount.textContent = `${items.length} ${
    items.length === 1 ? uiText[state.language].itemSingular : uiText[state.language].itemPlural
  }`;
  emptyState.hidden = items.length > 0;
}

function openModal(item) {
  document.querySelector("#modalImage").src = item.image;
  document.querySelector("#modalImage").alt = translate(item.name);
  document.querySelector("#modalCategory").textContent = translate(item.category);
  document.querySelector("#modalTitle").textContent = translate(item.name);
  document.querySelector("#modalDescription").textContent = translate(item.fullDescription);
  document.querySelector("#modalPrice").textContent = formatPrice(item);
  document.querySelector("#modalBadge").textContent = item.badge ? translate(item.badge) : uiText[state.language].fresh;

  modalBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
  modal.focus();
}

function closeModal() {
  modalBackdrop.hidden = true;
  document.body.style.overflow = "";
}

categoryBar.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  state.category = button.dataset.category;
  renderCategories();
  renderMenu();
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderMenu();
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.language = button.dataset.language;
    updateStaticText();
    renderCategories();
    renderMenu();
  });
});

menuGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-id]");
  if (!card) return;

  const item = activeMenuItems.find((menuItem) => menuItem.id === Number(card.dataset.id));
  if (item) openModal(item);
});

closeModalButton.addEventListener("click", closeModal);

modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modalBackdrop.hidden) closeModal();
});

updateStaticText();
renderCategories();
renderMenu();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (sessionStorage.getItem("menuUpdateReloaded")) return;
      sessionStorage.setItem("menuUpdateReloaded", "true");
      window.location.reload();
    });

    navigator.serviceWorker
      .register("service-worker.js")
      .then((registration) => {
        registration.update();

        if (registration.waiting) {
          registration.waiting.postMessage("SKIP_WAITING");
        }

        registration.addEventListener("updatefound", () => {
          const worker = registration.installing;
          if (!worker) return;

          worker.addEventListener("statechange", () => {
            if (worker.state === "installed" && navigator.serviceWorker.controller) {
              worker.postMessage("SKIP_WAITING");
            }
          });
        });
      })
      .catch(() => {
        // The menu still works online if the browser blocks service workers locally.
      });
  });
}
