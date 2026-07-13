const activeMenuItems = typeof menuItems === "undefined" ? [] : menuItems;

const state = {
  category: "All",
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

const categories = ["All", ...new Set(activeMenuItems.map((item) => item.category))];

function formatPrice(item) {
  return `${item.currency}${item.price.toFixed(2)}`;
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
          ${category}
        </button>
      `
    )
    .join("");
}

function getFilteredItems() {
  const query = state.query.trim().toLowerCase();

  return activeMenuItems.filter((item) => {
    const categoryMatch = state.category === "All" || item.category === state.category;
    const queryMatch =
      !query ||
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query);

    return categoryMatch && queryMatch;
  });
}

function renderMenu() {
  const items = getFilteredItems();

  menuGrid.innerHTML = items
    .map(
      (item) => `
        <button class="menu-card" type="button" data-id="${item.id}" aria-label="View ${item.name}">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
          <span class="card-body">
            <span class="card-topline">
              <span class="pill">${item.category}</span>
              ${item.badge ? `<span class="badge ${item.spicy ? "spicy" : ""}">${item.badge}</span>` : ""}
            </span>
            <span>
              <h3>${item.name}</h3>
              <p>${item.description}</p>
            </span>
            <span class="card-footer">
              <span class="price">${formatPrice(item)}</span>
              <span class="availability">${item.available ? "Available" : "Unavailable"}</span>
            </span>
          </span>
        </button>
      `
    )
    .join("");

  resultCount.textContent = `${items.length} item${items.length === 1 ? "" : "s"} shown`;
  emptyState.hidden = items.length > 0;
}

function openModal(item) {
  document.querySelector("#modalImage").src = item.image;
  document.querySelector("#modalImage").alt = item.name;
  document.querySelector("#modalCategory").textContent = item.category;
  document.querySelector("#modalTitle").textContent = item.name;
  document.querySelector("#modalDescription").textContent = item.fullDescription;
  document.querySelector("#modalPrice").textContent = formatPrice(item);
  document.querySelector("#modalBadge").textContent = item.badge || "Fresh";

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
