const menuItems = [
  {
    "id": 1,
    "name": {
      "he": "פיתה שווארמה עגל",
      "ar": "بيتا شوارما عجل",
      "en": "Veal Shawarma Pita"
    },
    "description": {
      "he": "פיתה עם שווארמה עגל, סלטים ותוספות.",
      "ar": "بيتا مع شاورما عجل، سلطات وإضافات.",
      "en": "Pita with veal shawarma, salads, and toppings."
    },
    "fullDescription": {
      "he": "פיתה טרייה במילוי שווארמה עגל, סלטים ותוספות לבחירה.",
      "ar": "بيتا طازجة محشوة بشاورما عجل، سلطات وإضافات حسب الاختيار.",
      "en": "Fresh pita filled with veal shawarma, salads, and toppings of your choice."
    },
    "price": 55,
    "currency": "₪",
    "categoryKey": "normalDishes",
    "category": {
      "he": "מנות רגילות",
      "ar": "أطباق عادية",
      "en": "Normal dishes"
    },
    "image": "images/veal-shawarma-pita.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": false,
    "spicy": false
  },
  {
    "id": 2,
    "name": {
      "he": "פגט שווארמה עגל",
      "ar": "باغيت شوارما عجل",
      "en": "Veal Shawarma baguette"
    },
    "description": {
      "he": "בגט עם שווארמה עגל, סלטים ותוספות.",
      "ar": "باغيت مع شاورما عجل، سلطات وإضافات.",
      "en": "Baguette with veal shawarma, salads, and toppings."
    },
    "fullDescription": {
      "he": "בגט טרי במילוי שווארמה עגל, סלטים ותוספות לבחירה.",
      "ar": "باغيت طازج محشو بشاورما عجل، سلطات وإضافات حسب الاختيار.",
      "en": "Fresh baguette filled with veal shawarma, salads, and toppings of your choice."
    },
    "price": 60,
    "currency": "₪",
    "categoryKey": "normalDishes",
    "category": {
      "he": "מנות רגילות",
      "ar": "أطباق عادية",
      "en": "Normal dishes"
    },
    "image": "images/veal-shawarma-baguette.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": false,
    "spicy": false
  },
  {
    "id": 3,
    "name": {
      "he": "לפה שווארמה עגל",
      "ar": "لفة شاورما عجل",
      "en": "Veal Shawarma Laffa"
    },
    "description": {
      "he": "לפה שווארמה עגל",
      "ar": "لفة شاورما عجل",
      "en": "Veal Shawarma Laffa"
    },
    "fullDescription": {
      "he": "לפה שווארמה עגל",
      "ar": "لفة شاورما عجل",
      "en": "Veal Shawarma Laffa"
    },
    "price": 60,
    "currency": "₪",
    "categoryKey": "normalDishes",
    "category": {
      "he": "מנות רגילות",
      "ar": "أطباق عادية",
      "en": "Normal dishes"
    },
    "image": "images/veal-shawarma-laffa-1783950887326.jpeg",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": false,
    "spicy": false
  },
  {
    "id": 4,
    "name": {
      "he": "פיתה שווארמה הודו",
      "ar": "بيتا شاورما حبش",
      "en": "Turkey Shawarma Pita"
    },
    "description": {
      "he": "פיתה שווארמה הודו",
      "ar": "بيتا شاورما حبش",
      "en": "Turkey Shawarma Pita"
    },
    "fullDescription": {
      "he": "פיתה שווארמה הודו",
      "ar": "بيتا شاورما حبش",
      "en": "Turkey Shawarma Pita"
    },
    "price": 55,
    "currency": "₪",
    "categoryKey": "normalDishes",
    "category": {
      "he": "מנות רגילות",
      "ar": "أطباق عادية",
      "en": "Normal dishes"
    },
    "image": "images/turkey-shawarma-pita-1783951366642.jpeg",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": false,
    "spicy": false
  },
  {
    "id": 5,
    "name": {
      "he": "פגט שווארמה הודו",
      "ar": "باغيت شاورما حبش",
      "en": "Turkey Shawarma Baguette"
    },
    "description": {
      "he": "פגט שווארמה הודו",
      "ar": "باغيت شاورما حبش",
      "en": "Turkey Shawarma Baguette"
    },
    "fullDescription": {
      "he": "פגט שווארמה הודו",
      "ar": "باغيت شاورما حبش",
      "en": "Turkey Shawarma Baguette"
    },
    "price": 60,
    "currency": "₪",
    "categoryKey": "normalDishes",
    "category": {
      "he": "מנות רגילות",
      "ar": "أطباق عادية",
      "en": "Normal dishes"
    },
    "image": "images/turkey-shawarma-baguette-1783951524185.jpeg",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": false,
    "spicy": false
  },
  {
    "id": 6,
    "name": {
      "he": "לאפה שווארמה הודו",
      "ar": "لفة شاورما حبش",
      "en": "Turkey Shawarma Laffa"
    },
    "description": {
      "he": "לאפה שווארמה הודו",
      "ar": "لفة شاورما حبش",
      "en": "Turkey Shawarma Laffa"
    },
    "fullDescription": {
      "he": "לאפה שווארמה הודו",
      "ar": "لفة شاورما حبش",
      "en": "Turkey Shawarma Laffa"
    },
    "price": 60,
    "currency": "₪",
    "categoryKey": "normalDishes",
    "category": {
      "he": "מנות רגילות",
      "ar": "أطباق عادية",
      "en": "Normal dishes"
    },
    "image": "images/turkey-shawarma-laffa-1783951617478.jpeg",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": false,
    "spicy": false
  },
  {
    "id": 7,
    "name": {
      "he": "פיתה שווארמה כבש",
      "ar": "يتا شاورما خروف",
      "en": "Lamb Shawarma Pita"
    },
    "description": {
      "he": "פיתה שווארמה כבש",
      "ar": "يتا شاورما خروف",
      "en": "Lamb Shawarma Pita"
    },
    "fullDescription": {
      "he": "פיתה שווארמה כבש",
      "ar": "يتا شاورما خروف",
      "en": "Lamb Shawarma Pita"
    },
    "price": 75,
    "currency": "₪",
    "categoryKey": "normalDishes",
    "category": {
      "he": "מנות רגילות",
      "ar": "أطباق عادية",
      "en": "Normal dishes"
    },
    "image": "images/lamb-shawarma-pita-1783951937560.jpeg",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": false,
    "spicy": false
  }
];
