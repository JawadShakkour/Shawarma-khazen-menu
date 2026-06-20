const fallbackMenuItems = [
  {
    id: 1,
    name: "Chicken Shawarma Wrap",
    description: "Marinated chicken, garlic sauce, pickles, and fries in warm pita.",
    fullDescription:
      "Tender chicken shawarma shaved fresh from the grill with garlic sauce, pickles, lettuce, and crispy fries wrapped in warm pita bread.",
    price: 9,
    currency: "$",
    category: "Shawarma",
    image:
      "https://images.unsplash.com/photo-1617692855027-33b14f061079?auto=format&fit=crop&w=900&q=80",
    badge: "Popular",
    available: true,
    vegetarian: false,
    spicy: false,
  },
  {
    id: 2,
    name: "Beef Shawarma Plate",
    description: "Beef shawarma with rice, salad, hummus, tahini, and pita.",
    fullDescription:
      "A generous plate of beef shawarma served with seasoned rice, chopped salad, creamy hummus, tahini, and fresh pita on the side.",
    price: 14,
    currency: "$",
    category: "Plates",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=80",
    badge: "Chef Pick",
    available: true,
    vegetarian: false,
    spicy: false,
  },
  {
    id: 3,
    name: "Spicy Shawarma Bowl",
    description: "Chicken shawarma, rice, chili sauce, vegetables, and tahini.",
    fullDescription:
      "A filling shawarma bowl with rice, juicy chicken shawarma, fresh vegetables, tahini, and a house chili sauce for a warm spicy finish.",
    price: 12,
    currency: "$",
    category: "Bowls",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    badge: "Spicy",
    available: true,
    vegetarian: false,
    spicy: true,
  },
  {
    id: 4,
    name: "Falafel Pita",
    description: "Crispy falafel, hummus, tomato, cucumber, pickles, and tahini.",
    fullDescription:
      "Crispy falafel balls tucked into pita with hummus, tomato, cucumber, pickles, parsley, and a smooth tahini drizzle.",
    price: 8,
    currency: "$",
    category: "Vegetarian",
    image:
      "https://images.unsplash.com/photo-1593001874117-c99c800e3ebc?auto=format&fit=crop&w=900&q=80",
    badge: "Vegetarian",
    available: true,
    vegetarian: true,
    spicy: false,
  },
  {
    id: 5,
    name: "Mixed Grill Plate",
    description: "Chicken skewers, kebab, shawarma, rice, salad, and sauces.",
    fullDescription:
      "A hearty mixed grill plate with chicken skewers, kebab, shawarma, rice, fresh salad, garlic sauce, tahini, and pita.",
    price: 18,
    currency: "$",
    category: "Plates",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=80",
    badge: "New",
    available: true,
    vegetarian: false,
    spicy: false,
  },
  {
    id: 6,
    name: "Hummus Shawarma",
    description: "Creamy hummus topped with warm chicken shawarma and olive oil.",
    fullDescription:
      "Silky hummus topped with warm chicken shawarma, olive oil, paprika, parsley, and pita for dipping.",
    price: 10,
    currency: "$",
    category: "Starters",
    image:
      "https://images.unsplash.com/photo-1577906096429-f73c2c312435?auto=format&fit=crop&w=900&q=80",
    badge: "Popular",
    available: true,
    vegetarian: false,
    spicy: false,
  },
  {
    id: 7,
    name: "Loaded Shawarma Fries",
    description: "Fries with shawarma, garlic sauce, chili, parsley, and pickles.",
    fullDescription:
      "Golden fries loaded with sliced shawarma, garlic sauce, chili sauce, parsley, and chopped pickles.",
    price: 11,
    currency: "$",
    category: "Sides",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
    badge: "Spicy",
    available: true,
    vegetarian: false,
    spicy: true,
  },
  {
    id: 8,
    name: "Tabbouleh Salad",
    description: "Parsley, tomato, bulgur, lemon juice, olive oil, and mint.",
    fullDescription:
      "A bright, fresh salad made with chopped parsley, tomato, bulgur, mint, lemon juice, and extra virgin olive oil.",
    price: 7,
    currency: "$",
    category: "Salads",
    image:
      "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=900&q=80",
    badge: "Fresh",
    available: true,
    vegetarian: true,
    spicy: false,
  },
  {
    id: 9,
    name: "Greek Salad",
    description: "Tomato, cucumber, olives, onion, feta, herbs, and olive oil.",
    fullDescription:
      "A crisp salad with tomato, cucumber, olives, red onion, feta cheese, oregano, lemon, and olive oil.",
    price: 8,
    currency: "$",
    category: "Salads",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
    badge: "Vegetarian",
    available: true,
    vegetarian: true,
    spicy: false,
  },
  {
    id: 10,
    name: "Baklava",
    description: "Sweet pastry with pistachio, honey syrup, and crisp layers.",
    fullDescription:
      "A classic dessert with crisp pastry layers, pistachio filling, and fragrant honey syrup.",
    price: 5,
    currency: "$",
    category: "Desserts",
    image:
      "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=900&q=80",
    badge: "Sweet",
    available: true,
    vegetarian: true,
    spicy: false,
  },
  {
    id: 11,
    name: "Mint Lemonade",
    description: "Cold lemonade blended with fresh mint and crushed ice.",
    fullDescription:
      "A refreshing cold drink made with fresh lemon juice, mint, light syrup, and crushed ice.",
    price: 4,
    currency: "$",
    category: "Cold Drinks",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=900&q=80",
    badge: "Cold",
    available: true,
    vegetarian: true,
    spicy: false,
  },
  {
    id: 12,
    name: "Arabic Coffee",
    description: "Hot cardamom coffee served fresh.",
    fullDescription:
      "A small cup of aromatic Arabic coffee with cardamom, served hot for a smooth finish after the meal.",
    price: 3,
    currency: "$",
    category: "Hot Drinks",
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80",
    badge: "Hot",
    available: true,
    vegetarian: true,
    spicy: false,
  },
];

const activeMenuItems = typeof menuItems === "undefined" ? fallbackMenuItems : menuItems;

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
