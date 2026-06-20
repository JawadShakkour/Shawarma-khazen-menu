const menuItems = [
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
