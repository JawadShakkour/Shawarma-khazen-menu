const menuCategories = [
  {
    "key": "normalDishes",
    "name": {
      "he": "מנות רגילות",
      "ar": "أطباق عادية",
      "en": "Normal dishes"
    }
  },
  {
    "key": "plates",
    "name": {
      "he": "צלחות",
      "ar": "أطباق",
      "en": "Platters"
    }
  },
  {
    "key": "comboMeals",
    "name": {
      "he": "מנות עסקיות",
      "ar": "وجبات عمل",
      "en": "Combo meal"
    }
  },
  {
    "key": "drinks",
    "name": {
      "he": "שתייה",
      "ar": "مشروبات",
      "en": "Drinks"
    }
  }
];
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
    "price": 57,
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
      "he": "באגט שווארמה עגל",
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
    "price": 62,
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
      "he": "לאפה שווארמה עגל",
      "ar": "لفة شاورما عجل",
      "en": "Veal Shawarma Laffa"
    },
    "description": {
      "he": "לאפה שווארמה עגל",
      "ar": "لفة شاورما عجل",
      "en": "Veal Shawarma Laffa"
    },
    "fullDescription": {
      "he": "לאפה שווארמה עגל",
      "ar": "لفة شاورما عجل",
      "en": "Veal Shawarma Laffa"
    },
    "price": 62,
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
    "price": 57,
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
      "he": "באגט שווארמה הודו",
      "ar": "باغيت شاورما حبش",
      "en": "Turkey Shawarma Baguette"
    },
    "description": {
      "he": "באגט שווארמה הודו",
      "ar": "باغيت شاورما حبش",
      "en": "Turkey Shawarma Baguette"
    },
    "fullDescription": {
      "he": "באגט שווארמה הודו",
      "ar": "باغيت شاورما حبش",
      "en": "Turkey Shawarma Baguette"
    },
    "price": 62,
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
    "price": 62,
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
      "ar": "بيتا شاورما خروف",
      "en": "Lamb Shawarma Pita"
    },
    "description": {
      "he": "פיתה שווארמה כבש",
      "ar": "بيتا شاورما خروف",
      "en": "Lamb Shawarma Pita"
    },
    "fullDescription": {
      "he": "פיתה שווארמה כבש",
      "ar": "بيتا شاورما خروف",
      "en": "Lamb Shawarma Pita"
    },
    "price": 77,
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
  },
  {
    "id": 8,
    "name": {
      "he": "באגט שווארמה כבש",
      "ar": "باغيت شاورما خروف",
      "en": "Lamb Shawarma Baguette"
    },
    "description": {
      "he": "באגט שווארמה כבש",
      "ar": "باغيت شاورما خروف",
      "en": "Lamb Shawarma Baguette"
    },
    "fullDescription": {
      "he": "באגט שווארמה כבש",
      "ar": "باغيت شاورما خروف",
      "en": "Lamb Shawarma Baguette"
    },
    "price": 82,
    "currency": "₪",
    "categoryKey": "normalDishes",
    "category": {
      "he": "מנות רגילות",
      "ar": "أطباق عادية",
      "en": "Normal dishes"
    },
    "image": "images/lamb-shawarma-baguette.png",
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
    "id": 9,
    "name": {
      "he": "לאפה שווארמה כבש",
      "ar": "لفة شاورما خروف",
      "en": "Lamb Shawarma Laffa"
    },
    "description": {
      "he": "לאפה שווארמה כבש",
      "ar": "لفة شاورما خروف",
      "en": "Lamb Shawarma Laffa"
    },
    "fullDescription": {
      "he": "לאפה שווארמה כבש",
      "ar": "لفة شاورما خروف",
      "en": "Lamb Shawarma Laffa"
    },
    "price": 82,
    "currency": "₪",
    "categoryKey": "normalDishes",
    "category": {
      "he": "מנות רגילות",
      "ar": "أطباق عادية",
      "en": "Normal dishes"
    },
    "image": "images/lamb-shawarma-laffa.png",
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
    "id": 10,
    "name": {
      "he": "פיתה פלאפל",
      "ar": "بيتا فلافل",
      "en": "Falafel Pita"
    },
    "description": {
      "he": "פיתה פלאפל",
      "ar": "بيتا فلافل",
      "en": "Falafel Pita"
    },
    "fullDescription": {
      "he": "פיתה פלאפל",
      "ar": "بيتا فلافل",
      "en": "Falafel Pita"
    },
    "price": 25,
    "currency": "₪",
    "categoryKey": "normalDishes",
    "category": {
      "he": "מנות רגילות",
      "ar": "أطباق عادية",
      "en": "Normal dishes"
    },
    "image": "images/falafel-pita.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": true,
    "spicy": false
  },
  {
    "id": 11,
    "name": {
      "he": "לאפה פלאפל",
      "ar": "لفة فلافل",
      "en": "Falafel Laffa"
    },
    "description": {
      "he": "לאפה פלאפל",
      "ar": "لفة فلافل",
      "en": "Falafel Laffa"
    },
    "fullDescription": {
      "he": "לאפה פלאפל",
      "ar": "لفة فلافل",
      "en": "Falafel Laffa"
    },
    "price": 30,
    "currency": "₪",
    "categoryKey": "normalDishes",
    "category": {
      "he": "מנות רגילות",
      "ar": "أطباق عادية",
      "en": "Normal dishes"
    },
    "image": "images/falafel-laffa.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": true,
    "spicy": false
  },
  {
    "id": 12,
    "name": {
      "he": "באגט פלאפל",
      "ar": "باغيت فلافل",
      "en": "Falafel Baguette"
    },
    "description": {
      "he": "באגט פלאפל",
      "ar": "باغيت فلافل",
      "en": "Falafel Baguette"
    },
    "fullDescription": {
      "he": "באגט פלאפל",
      "ar": "باغيت فلافل",
      "en": "Falafel Baguette"
    },
    "price": 30,
    "currency": "₪",
    "categoryKey": "normalDishes",
    "category": {
      "he": "מנות רגילות",
      "ar": "أطباق عادية",
      "en": "Normal dishes"
    },
    "image": "images/falafel-baguette.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": true,
    "spicy": false
  },
  {
    "id": 13,
    "name": {
      "he": "פיתה שווארמה מיקס עגל וכבש",
      "ar": "بيتا شاورما مكس عجل وخروف",
      "en": "Veal and Lamb Shawarma Pita"
    },
    "description": {
      "he": "פיתה שווארמה מיקס עגל וכבש",
      "ar": "بيتا شاورما مكس عجل وخروف",
      "en": "Veal and Lamb Shawarma Pita"
    },
    "fullDescription": {
      "he": "פיתה שווארמה מיקס עגל וכבש",
      "ar": "بيتا شاورما مكس عجل وخروف",
      "en": "Veal and Lamb Shawarma Pita"
    },
    "price": 67,
    "currency": "₪",
    "categoryKey": "normalDishes",
    "category": {
      "he": "מנות רגילות",
      "ar": "أطباق عادية",
      "en": "Normal dishes"
    },
    "image": "images/veal-lamb-shawarma-pita.png",
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
    "id": 14,
    "name": {
      "he": "באגט שווארמה מיקס עגל וכבש",
      "ar": "باغيت شاورما مكس عجل وخروف",
      "en": "Veal and Lamb Shawarma Baguette"
    },
    "description": {
      "he": "באגט שווארמה מיקס עגל וכבש",
      "ar": "باغيت شاورما مكس عجل وخروف",
      "en": "Veal and Lamb Shawarma Baguette"
    },
    "fullDescription": {
      "he": "באגט שווארמה מיקס עגל וכבש",
      "ar": "باغيت شاورما مكس عجل وخروف",
      "en": "Veal and Lamb Shawarma Baguette"
    },
    "price": 72,
    "currency": "₪",
    "categoryKey": "normalDishes",
    "category": {
      "he": "מנות רגילות",
      "ar": "أطباق عادية",
      "en": "Normal dishes"
    },
    "image": "images/veal-lamb-shawarma-baguette.png",
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
    "id": 15,
    "name": {
      "he": "לאפה שווארמה מיקס עגל וכבש",
      "ar": "لفة شاورما مكس عجل وخروف",
      "en": "Veal and Lamb Shawarma Laffa"
    },
    "description": {
      "he": "לאפה שווארמה מיקס עגל וכבש",
      "ar": "لفة شاورما مكس عجل وخروف",
      "en": "Veal and Lamb Shawarma Laffa"
    },
    "fullDescription": {
      "he": "לאפה שווארמה מיקס עגל וכבש",
      "ar": "لفة شاورما مكس عجل وخروف",
      "en": "Veal and Lamb Shawarma Laffa"
    },
    "price": 72,
    "currency": "₪",
    "categoryKey": "normalDishes",
    "category": {
      "he": "מנות רגילות",
      "ar": "أطباق عادية",
      "en": "Normal dishes"
    },
    "image": "images/veal-lamb-shawarma-laffa.png",
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
    "id": 16,
    "name": {
      "he": "צלחת חומוס",
      "ar": "صحن حمص",
      "en": "Hummus Plate"
    },
    "description": {
      "he": "צלחת חומוס",
      "ar": "صحن حمص",
      "en": "Hummus Plate"
    },
    "fullDescription": {
      "he": "צלחת חומוס",
      "ar": "صحن حمص",
      "en": "Hummus Plate"
    },
    "price": 20,
    "currency": "₪",
    "categoryKey": "normalDishes",
    "category": {
      "he": "מנות רגילות",
      "ar": "أطباق عادية",
      "en": "Normal dishes"
    },
    "image": "images/hummus-plate.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": true,
    "spicy": false
  },
  {
    "id": 17,
    "name": {
      "he": "צלחת טחינה",
      "ar": "صحن طحينة",
      "en": "Tahini Plate"
    },
    "description": {
      "he": "צלחת טחינה",
      "ar": "صحن طحينة",
      "en": "Tahini Plate"
    },
    "fullDescription": {
      "he": "צלחת טחינה",
      "ar": "صحن طحينة",
      "en": "Tahini Plate"
    },
    "price": 20,
    "currency": "₪",
    "categoryKey": "normalDishes",
    "category": {
      "he": "מנות רגילות",
      "ar": "أطباق عادية",
      "en": "Normal dishes"
    },
    "image": "images/tahini-plate.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": true,
    "spicy": false
  },
  {
    "id": 18,
    "name": {
      "he": "צלחת צ׳יפס",
      "ar": "صحن بطاطا مقلية",
      "en": "French Fries Plate"
    },
    "description": {
      "he": "צלחת צ׳יפס",
      "ar": "صحن بطاطا مقلية",
      "en": "French Fries Plate"
    },
    "fullDescription": {
      "he": "צלחת צ׳יפס",
      "ar": "صحن بطاطا مقلية",
      "en": "French Fries Plate"
    },
    "note": {
      "he": "קיים גם גודל אישי במחיר ₪5.",
      "ar": "يوجد أيضًا حجم شخصي بسعر ₪5.",
      "en": "Personal size is also available for ₪5."
    },
    "price": 20,
    "currency": "₪",
    "categoryKey": "normalDishes",
    "category": {
      "he": "מנות רגילות",
      "ar": "أطباق عادية",
      "en": "Normal dishes"
    },
    "image": "images/french-fries-plate.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": true,
    "spicy": false
  },
  {
    "id": 19,
    "name": {
      "he": "פיתה שניצל",
      "ar": "بيتا شنيتسل",
      "en": "Schnitzel Pita"
    },
    "description": {
      "he": "פיתה שניצל",
      "ar": "بيتا شنيتسل",
      "en": "Schnitzel Pita"
    },
    "fullDescription": {
      "he": "פיתה שניצל",
      "ar": "بيتا شنيتسل",
      "en": "Schnitzel Pita"
    },
    "price": 45,
    "currency": "₪",
    "categoryKey": "normalDishes",
    "category": {
      "he": "מנות רגילות",
      "ar": "أطباق عادية",
      "en": "Normal dishes"
    },
    "image": "images/schnitzel-pita.png",
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
    "id": 20,
    "name": {
      "he": "באגט שניצל",
      "ar": "باغيت شنيتسل",
      "en": "Schnitzel Baguette"
    },
    "description": {
      "he": "באגט שניצל",
      "ar": "باغيت شنيتسل",
      "en": "Schnitzel Baguette"
    },
    "fullDescription": {
      "he": "באגט שניצל",
      "ar": "باغيت شنيتسل",
      "en": "Schnitzel Baguette"
    },
    "price": 50,
    "currency": "₪",
    "categoryKey": "normalDishes",
    "category": {
      "he": "מנות רגילות",
      "ar": "أطباق عادية",
      "en": "Normal dishes"
    },
    "image": "images/schnitzel-baguette.png",
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
    "id": 21,
    "name": {
      "he": "לאפה שניצל",
      "ar": "لفة شنيتسل",
      "en": "Schnitzel Laffa"
    },
    "description": {
      "he": "לאפה שניצל",
      "ar": "لفة شنيتسل",
      "en": "Schnitzel Laffa"
    },
    "fullDescription": {
      "he": "לאפה שניצל",
      "ar": "لفة شنيتسل",
      "en": "Schnitzel Laffa"
    },
    "price": 50,
    "currency": "₪",
    "categoryKey": "normalDishes",
    "category": {
      "he": "מנות רגילות",
      "ar": "أطباق عادية",
      "en": "Normal dishes"
    },
    "image": "images/schnitzel-laffa.png",
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
    "id": 50,
    "name": {
      "he": "צלחת שווארמה עגל אישית",
      "ar": "طبق شاورما عجل فردي",
      "en": "Personal Veal Shawarma Plate"
    },
    "description": {
      "he": "צלחת אישית עם שווארמה עגל.",
      "ar": "طبق فردي مع شاورما العجل.",
      "en": "An individual plate of veal shawarma."
    },
    "fullDescription": {
      "he": "מנה אישית של שווארמה עגל, מוגשת בצלחת.",
      "ar": "حصة فردية من شاورما العجل، تقدم في طبق.",
      "en": "An individual serving of veal shawarma, served on a plate."
    },
    "price": 90,
    "currency": "₪",
    "categoryKey": "plates",
    "category": {
      "he": "צלחות",
      "ar": "أطباق",
      "en": "Platters"
    },
    "image": "images/shawarma-plate-veal-personal.jpg",
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
    "id": 51,
    "name": {
      "he": "צלחת שווארמה הודו אישית",
      "ar": "طبق شاورما حبش فردي",
      "en": "Personal Turkey Shawarma Plate"
    },
    "description": {
      "he": "צלחת אישית עם שווארמה הודו.",
      "ar": "طبق فردي مع شاورما الحبش.",
      "en": "An individual plate of turkey shawarma."
    },
    "fullDescription": {
      "he": "מנה אישית של שווארמה הודו, מוגשת בצלחת.",
      "ar": "حصة فردية من شاورما الحبش، تقدم في طبق.",
      "en": "An individual serving of turkey shawarma, served on a plate."
    },
    "price": 90,
    "currency": "₪",
    "categoryKey": "plates",
    "category": {
      "he": "צלחות",
      "ar": "أطباق",
      "en": "Platters"
    },
    "image": "images/shawarma-plate-turkey-personal.jpg",
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
    "id": 52,
    "name": {
      "he": "צלחת שווארמה כבש אישית",
      "ar": "طبق شاورما خروف فردي",
      "en": "Personal Lamb Shawarma Plate"
    },
    "description": {
      "he": "צלחת אישית עם שווארמה כבש.",
      "ar": "طبق فردي مع شاورما الخروف.",
      "en": "An individual plate of lamb shawarma."
    },
    "fullDescription": {
      "he": "מנה אישית של שווארמה כבש, מוגשת בצלחת.",
      "ar": "حصة فردية من شاورما الخروف، تقدم في طبق.",
      "en": "An individual serving of lamb shawarma, served on a plate."
    },
    "price": 110,
    "currency": "₪",
    "categoryKey": "plates",
    "category": {
      "he": "צלחות",
      "ar": "أطباق",
      "en": "Platters"
    },
    "image": "images/shawarma-plate-lamb-personal.jpg",
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
    "id": 53,
    "name": {
      "he": "צלחת מיקס אישית",
      "ar": "طبق شاورما مكس فردي",
      "en": "Personal Mixed Shawarma Plate"
    },
    "description": {
      "he": "צלחת אישית עם שווארמה מיקס עגל וכבש.",
      "ar": "طبق فردي مع مزيج من شاورما العجل والخروف.",
      "en": "An individual plate with a mix of veal and lamb shawarma."
    },
    "fullDescription": {
      "he": "מנה אישית של שווארמה מיקס עגל וכבש, מוגשת בצלחת.",
      "ar": "حصة فردية من مزيج شاورما العجل والخروف، تقدم في طبق.",
      "en": "An individual serving of mixed veal and lamb shawarma, served on a plate."
    },
    "price": 100,
    "currency": "₪",
    "categoryKey": "plates",
    "category": {
      "he": "צלחות",
      "ar": "أطباق",
      "en": "Platters"
    },
    "image": "images/shawarma-plate-mix-personal.jpg",
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
    "id": 54,
    "name": {
      "he": "צלחת זוגית שווארמה עגל / הודו",
      "ar": "طبق شاورما عجل أو حبش لشخصين",
      "en": "Veal or Turkey Shawarma Platter for Two"
    },
    "description": {
      "he": "צלחת זוגית עם שווארמה עגל או הודו, חומוס, סלטים וצ׳יפס.",
      "ar": "طبق لشخصين مع شاورما العجل أو الحبش، وحمص وسلطات وبطاطا مقلية.",
      "en": "A platter for two with veal or turkey shawarma, hummus, salads, and fries."
    },
    "fullDescription": {
      "he": "צלחת לשני סועדים עם שווארמה עגל או הודו, כולל חומוס, סלטים וצ׳יפס.",
      "ar": "طبق لشخصين مع شاورما العجل أو الحبش، ويشمل حمصًا وسلطات وبطاطا مقلية.",
      "en": "A platter for two with veal or turkey shawarma, including hummus, salads, and fries."
    },
    "price": 200,
    "currency": "₪",
    "categoryKey": "plates",
    "category": {
      "he": "צלחות",
      "ar": "أطباق",
      "en": "Platters"
    },
    "image": "images/shawarma-plate-veal-couple.jpg",
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
    "id": 55,
    "name": {
      "he": "צלחת מיקס זוגית",
      "ar": "طبق شاورما مكس لشخصين",
      "en": "Mixed Shawarma Platter for Two"
    },
    "description": {
      "he": "צלחת זוגית עם שווארמה מיקס, חומוס, סלטים וצ׳יפס.",
      "ar": "طبق لشخصين مع شاورما مكس، وحمص وسلطات وبطاطا مقلية.",
      "en": "A platter for two with mixed shawarma, hummus, salads, and fries."
    },
    "fullDescription": {
      "he": "צלחת לשני סועדים עם שווארמה מיקס עגל וכבש, כולל חומוס, סלטים וצ׳יפס.",
      "ar": "طبق لشخصين مع مزيج شاورما العجل والخروف، ويشمل حمصًا وسلطات وبطاطا مقلية.",
      "en": "A platter for two with mixed veal and lamb shawarma, including hummus, salads, and fries."
    },
    "price": 220,
    "currency": "₪",
    "categoryKey": "plates",
    "category": {
      "he": "צלחות",
      "ar": "أطباق",
      "en": "Platters"
    },
    "image": "images/shawarma-plate-mix-couple.jpg",
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
    "id": 56,
    "name": {
      "he": "צלחת זוגית שווארמה כבש",
      "ar": "طبق شاورما خروف لشخصين",
      "en": "Lamb Shawarma Platter for Two"
    },
    "description": {
      "he": "צלחת זוגית עם שווארמה כבש, חומוס, סלטים וצ׳יפס.",
      "ar": "طبق لشخصين مع شاورما الخروف، وحمص وسلطات وبطاطا مقلية.",
      "en": "A platter for two with lamb shawarma, hummus, salads, and fries."
    },
    "fullDescription": {
      "he": "צלחת לשני סועדים עם שווארמה כבש, כולל חומוס, סלטים וצ׳יפס.",
      "ar": "طبق لشخصين مع شاورما الخروف، ويشمل حمصًا وسلطات وبطاطا مقلية.",
      "en": "A platter for two with lamb shawarma, including hummus, salads, and fries."
    },
    "price": 240,
    "currency": "₪",
    "categoryKey": "plates",
    "category": {
      "he": "צלחות",
      "ar": "أطباق",
      "en": "Platters"
    },
    "image": "images/shawarma-plate-lamb-couple.jpg",
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
    "id": 57,
    "name": {
      "he": "צלחת שווארמה עגל / הודו לשלושה סועדים",
      "ar": "طبق شاورما عجل أو حبش لثلاثة أشخاص",
      "en": "Veal or Turkey Shawarma Platter for Three"
    },
    "description": {
      "he": "צלחת שווארמה עגל או הודו לשלושה סועדים, עם חומוס, סלטים וצ׳יפס.",
      "ar": "طبق شاورما العجل أو الحبش لثلاثة أشخاص، مع حمص وسلطات وبطاطا مقلية.",
      "en": "A veal or turkey shawarma platter for three, with hummus, salads, and fries."
    },
    "fullDescription": {
      "he": "צלחת גדולה לשלושה סועדים עם שווארמה עגל או הודו, כולל חומוס, סלטים וצ׳יפס.",
      "ar": "طبق كبير لثلاثة أشخاص مع شاورما العجل أو الحبش، ويشمل حمصًا وسلطات وبطاطا مقلية.",
      "en": "A large platter for three with veal or turkey shawarma, including hummus, salads, and fries."
    },
    "price": 290,
    "currency": "₪",
    "categoryKey": "plates",
    "category": {
      "he": "צלחות",
      "ar": "أطباق",
      "en": "Platters"
    },
    "image": "images/shawarma-plate-veal-three.jpg",
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
    "id": 58,
    "name": {
      "he": "צלחת מיקס לשלושה סועדים",
      "ar": "طبق شاورما مكس لثلاثة أشخاص",
      "en": "Mixed Shawarma Platter for Three"
    },
    "description": {
      "he": "צלחת שווארמה מיקס לשלושה סועדים, עם חומוס, סלטים וצ׳יפס.",
      "ar": "طبق شاورما مكس لثلاثة أشخاص، مع حمص وسلطات وبطاطا مقلية.",
      "en": "A mixed shawarma platter for three, with hummus, salads, and fries."
    },
    "fullDescription": {
      "he": "צלחת גדולה לשלושה סועדים עם שווארמה מיקס עגל וכבש, כולל חומוס, סלטים וצ׳יפס.",
      "ar": "طبق كبير لثلاثة أشخاص مع مزيج شاورما العجل والخروف، ويشمل حمصًا وسلطات وبطاطا مقلية.",
      "en": "A large platter for three with mixed veal and lamb shawarma, including hummus, salads, and fries."
    },
    "price": 320,
    "currency": "₪",
    "categoryKey": "plates",
    "category": {
      "he": "צלחות",
      "ar": "أطباق",
      "en": "Platters"
    },
    "image": "images/shawarma-plate-mix-three.jpg",
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
    "id": 59,
    "name": {
      "he": "צלחת שווארמה כבש לשלושה סועדים",
      "ar": "طبق شاورما خروف لثلاثة أشخاص",
      "en": "Lamb Shawarma Platter for Three"
    },
    "description": {
      "he": "צלחת שווארמה כבש לשלושה סועדים, עם חומוס, סלטים וצ׳יפס.",
      "ar": "طبق شاورما الخروف لثلاثة أشخاص، مع حمص وسلطات وبطاطا مقلية.",
      "en": "A lamb shawarma platter for three, with hummus, salads, and fries."
    },
    "fullDescription": {
      "he": "צלחת גדולה לשלושה סועדים עם שווארמה כבש, כולל חומוס, סלטים וצ׳יפס.",
      "ar": "طبق كبير لثلاثة أشخاص مع شاورما الخروف، ويشمل حمصًا وسلطات وبطاطا مقلية.",
      "en": "A large platter for three with lamb shawarma, including hummus, salads, and fries."
    },
    "price": 350,
    "currency": "₪",
    "categoryKey": "plates",
    "category": {
      "he": "צלחות",
      "ar": "أطباق",
      "en": "Platters"
    },
    "image": "images/shawarma-plate-lamb-three.jpg",
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
    "id": 22,
    "name": {
      "he": "ארוחה עסקית פיתה שווארמה עגל",
      "ar": "وجبة عمل بيتا شاورما عجل",
      "en": "Veal Shawarma Pita Combo Meal"
    },
    "description": {
      "he": "ארוחה עסקית פיתה שווארמה עגל",
      "ar": "وجبة عمل بيتا شاورما عجل",
      "en": "Veal Shawarma Pita Combo Meal"
    },
    "fullDescription": {
      "he": "ארוחה עסקית פיתה שווארמה עגל",
      "ar": "وجبة عمل بيتا شاورما عجل",
      "en": "Veal Shawarma Pita Combo Meal"
    },
    "price": 72,
    "currency": "₪",
    "categoryKey": "comboMeals",
    "category": {
      "he": "מנות עסקיות",
      "ar": "وجبات عمل",
      "en": "Combo meal"
    },
    "image": "images/veal-shawarma-pita-combo.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": false,
    "spicy": false,
    "note": {
      "he": "הארוחה כוללת שתייה וצ׳יפס.",
      "ar": "الوجبة تشمل مشروب وبطاطا مقلية.",
      "en": "Combo includes a drink and chips."
    }
  },
  {
    "id": 23,
    "name": {
      "he": "ארוחה עסקית באגט שווארמה עגל",
      "ar": "وجبة عمل باغيت شاورما عجل",
      "en": "Veal Shawarma Baguette Combo Meal"
    },
    "description": {
      "he": "ארוחה עסקית באגט שווארמה עגל",
      "ar": "وجبة عمل باغيت شاورما عجل",
      "en": "Veal Shawarma Baguette Combo Meal"
    },
    "fullDescription": {
      "he": "ארוחה עסקית באגט שווארמה עגל",
      "ar": "وجبة عمل باغيت شاورما عجل",
      "en": "Veal Shawarma Baguette Combo Meal"
    },
    "price": 77,
    "currency": "₪",
    "categoryKey": "comboMeals",
    "category": {
      "he": "מנות עסקיות",
      "ar": "وجبات عمل",
      "en": "Combo meal"
    },
    "image": "images/veal-shawarma-baguette-combo.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": false,
    "spicy": false,
    "note": {
      "he": "הארוחה כוללת שתייה וצ׳יפס.",
      "ar": "الوجبة تشمل مشروب وبطاطا مقلية.",
      "en": "Combo includes a drink and chips."
    }
  },
  {
    "id": 24,
    "name": {
      "he": "ארוחה עסקית לאפה שווארמה עגל",
      "ar": "وجبة عمل لفة شاورما عجل",
      "en": "Veal Shawarma Laffa Combo Meal"
    },
    "description": {
      "he": "ארוחה עסקית לאפה שווארמה עגל",
      "ar": "وجبة عمل لفة شاورما عجل",
      "en": "Veal Shawarma Laffa Combo Meal"
    },
    "fullDescription": {
      "he": "ארוחה עסקית לאפה שווארמה עגל",
      "ar": "وجبة عمل لفة شاورما عجل",
      "en": "Veal Shawarma Laffa Combo Meal"
    },
    "price": 77,
    "currency": "₪",
    "categoryKey": "comboMeals",
    "category": {
      "he": "מנות עסקיות",
      "ar": "وجبات عمل",
      "en": "Combo meal"
    },
    "image": "images/veal-shawarma-laffa-combo.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": false,
    "spicy": false,
    "note": {
      "he": "הארוחה כוללת שתייה וצ׳יפס.",
      "ar": "الوجبة تشمل مشروب وبطاطا مقلية.",
      "en": "Combo includes a drink and chips."
    }
  },
  {
    "id": 25,
    "name": {
      "he": "ארוחה עסקית פיתה שווארמה הודו",
      "ar": "وجبة عمل بيتا شاورما حبش",
      "en": "Turkey Shawarma Pita Combo Meal"
    },
    "description": {
      "he": "ארוחה עסקית פיתה שווארמה הודו",
      "ar": "وجبة عمل بيتا شاورما حبش",
      "en": "Turkey Shawarma Pita Combo Meal"
    },
    "fullDescription": {
      "he": "ארוחה עסקית פיתה שווארמה הודו",
      "ar": "وجبة عمل بيتا شاورما حبش",
      "en": "Turkey Shawarma Pita Combo Meal"
    },
    "price": 72,
    "currency": "₪",
    "categoryKey": "comboMeals",
    "category": {
      "he": "מנות עסקיות",
      "ar": "وجبات عمل",
      "en": "Combo meal"
    },
    "image": "images/turkey-shawarma-pita-combo.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": false,
    "spicy": false,
    "note": {
      "he": "הארוחה כוללת שתייה וצ׳יפס.",
      "ar": "الوجبة تشمل مشروب وبطاطا مقلية.",
      "en": "Combo includes a drink and chips."
    }
  },
  {
    "id": 26,
    "name": {
      "he": "ארוחה עסקית באגט שווארמה הודו",
      "ar": "وجبة عمل باغيت شاورما حبش",
      "en": "Turkey Shawarma Baguette Combo Meal"
    },
    "description": {
      "he": "ארוחה עסקית באגט שווארמה הודו",
      "ar": "وجبة عمل باغيت شاورما حبش",
      "en": "Turkey Shawarma Baguette Combo Meal"
    },
    "fullDescription": {
      "he": "ארוחה עסקית באגט שווארמה הודו",
      "ar": "وجبة عمل باغيت شاورما حبش",
      "en": "Turkey Shawarma Baguette Combo Meal"
    },
    "price": 77,
    "currency": "₪",
    "categoryKey": "comboMeals",
    "category": {
      "he": "מנות עסקיות",
      "ar": "وجبات عمل",
      "en": "Combo meal"
    },
    "image": "images/turkey-shawarma-baguette-combo.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": false,
    "spicy": false,
    "note": {
      "he": "הארוחה כוללת שתייה וצ׳יפס.",
      "ar": "الوجبة تشمل مشروب وبطاطا مقلية.",
      "en": "Combo includes a drink and chips."
    }
  },
  {
    "id": 27,
    "name": {
      "he": "ארוחה עסקית לאפה שווארמה הודו",
      "ar": "وجبة عمل لفة شاورما حبش",
      "en": "Turkey Shawarma Laffa Combo Meal"
    },
    "description": {
      "he": "ארוחה עסקית לאפה שווארמה הודו",
      "ar": "وجبة عمل لفة شاورما حبش",
      "en": "Turkey Shawarma Laffa Combo Meal"
    },
    "fullDescription": {
      "he": "ארוחה עסקית לאפה שווארמה הודו",
      "ar": "وجبة عمل لفة شاورما حبش",
      "en": "Turkey Shawarma Laffa Combo Meal"
    },
    "price": 77,
    "currency": "₪",
    "categoryKey": "comboMeals",
    "category": {
      "he": "מנות עסקיות",
      "ar": "وجبات عمل",
      "en": "Combo meal"
    },
    "image": "images/turkey-shawarma-laffa-combo.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": false,
    "spicy": false,
    "note": {
      "he": "הארוחה כוללת שתייה וצ׳יפס.",
      "ar": "الوجبة تشمل مشروب وبطاطا مقلية.",
      "en": "Combo includes a drink and chips."
    }
  },
  {
    "id": 28,
    "name": {
      "he": "ארוחה עסקית פיתה שווארמה כבש",
      "ar": "وجبة عمل بيتا شاورما خروف",
      "en": "Lamb Shawarma Pita Combo Meal"
    },
    "description": {
      "he": "ארוחה עסקית פיתה שווארמה כבש",
      "ar": "وجبة عمل بيتا شاورما خروف",
      "en": "Lamb Shawarma Pita Combo Meal"
    },
    "fullDescription": {
      "he": "ארוחה עסקית פיתה שווארמה כבש",
      "ar": "وجبة عمل بيتا شاورما خروف",
      "en": "Lamb Shawarma Pita Combo Meal"
    },
    "price": 92,
    "currency": "₪",
    "categoryKey": "comboMeals",
    "category": {
      "he": "מנות עסקיות",
      "ar": "وجبات عمل",
      "en": "Combo meal"
    },
    "image": "images/lamb-shawarma-pita-combo.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": false,
    "spicy": false,
    "note": {
      "he": "הארוחה כוללת שתייה וצ׳יפס.",
      "ar": "الوجبة تشمل مشروب وبطاطا مقلية.",
      "en": "Combo includes a drink and chips."
    }
  },
  {
    "id": 29,
    "name": {
      "he": "ארוחה עסקית באגט שווארמה כבש",
      "ar": "وجبة عمل باغيت شاورما خروف",
      "en": "Lamb Shawarma Baguette Combo Meal"
    },
    "description": {
      "he": "ארוחה עסקית באגט שווארמה כבש",
      "ar": "وجبة عمل باغيت شاورما خروف",
      "en": "Lamb Shawarma Baguette Combo Meal"
    },
    "fullDescription": {
      "he": "ארוחה עסקית באגט שווארמה כבש",
      "ar": "وجبة عمل باغيت شاورما خروف",
      "en": "Lamb Shawarma Baguette Combo Meal"
    },
    "price": 97,
    "currency": "₪",
    "categoryKey": "comboMeals",
    "category": {
      "he": "מנות עסקיות",
      "ar": "وجبات عمل",
      "en": "Combo meal"
    },
    "image": "images/lamb-shawarma-baguette-combo.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": false,
    "spicy": false,
    "note": {
      "he": "הארוחה כוללת שתייה וצ׳יפס.",
      "ar": "الوجبة تشمل مشروب وبطاطا مقلية.",
      "en": "Combo includes a drink and chips."
    }
  },
  {
    "id": 30,
    "name": {
      "he": "ארוחה עסקית לאפה שווארמה כבש",
      "ar": "وجبة عمل لفة شاورما خروف",
      "en": "Lamb Shawarma Laffa Combo Meal"
    },
    "description": {
      "he": "ארוחה עסקית לאפה שווארמה כבש",
      "ar": "وجبة عمل لفة شاورما خروف",
      "en": "Lamb Shawarma Laffa Combo Meal"
    },
    "fullDescription": {
      "he": "ארוחה עסקית לאפה שווארמה כבש",
      "ar": "وجبة عمل لفة شاورما خروف",
      "en": "Lamb Shawarma Laffa Combo Meal"
    },
    "price": 97,
    "currency": "₪",
    "categoryKey": "comboMeals",
    "category": {
      "he": "מנות עסקיות",
      "ar": "وجبات عمل",
      "en": "Combo meal"
    },
    "image": "images/lamb-shawarma-laffa-combo.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": false,
    "spicy": false,
    "note": {
      "he": "הארוחה כוללת שתייה וצ׳יפס.",
      "ar": "الوجبة تشمل مشروب وبطاطا مقلية.",
      "en": "Combo includes a drink and chips."
    }
  },
  {
    "id": 31,
    "name": {
      "he": "ארוחה עסקית פיתה שווארמה מיקס עגל וכבש",
      "ar": "وجبة عمل بيتا شاورما مكس عجل وخروف",
      "en": "Veal and Lamb Shawarma Pita Combo Meal"
    },
    "description": {
      "he": "ארוחה עסקית פיתה שווארמה מיקס עגל וכבש",
      "ar": "وجبة عمل بيتا شاورما مكس عجل وخروف",
      "en": "Veal and Lamb Shawarma Pita Combo Meal"
    },
    "fullDescription": {
      "he": "ארוחה עסקית פיתה שווארמה מיקס עגל וכבש",
      "ar": "وجبة عمل بيتا شاورما مكس عجل وخروف",
      "en": "Veal and Lamb Shawarma Pita Combo Meal"
    },
    "price": 80,
    "currency": "₪",
    "categoryKey": "comboMeals",
    "category": {
      "he": "מנות עסקיות",
      "ar": "وجبات عمل",
      "en": "Combo meal"
    },
    "image": "images/veal-lamb-shawarma-pita-combo.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": false,
    "spicy": false,
    "note": {
      "he": "הארוחה כוללת שתייה וצ׳יפס.",
      "ar": "الوجبة تشمل مشروب وبطاطا مقلية.",
      "en": "Combo includes a drink and chips."
    }
  },
  {
    "id": 32,
    "name": {
      "he": "ארוחה עסקית באגט שווארמה מיקס עגל וכבש",
      "ar": "وجبة عمل باغيت شاورما مكس عجل وخروف",
      "en": "Veal and Lamb Shawarma Baguette Combo Meal"
    },
    "description": {
      "he": "ארוחה עסקית באגט שווארמה מיקס עגל וכבש",
      "ar": "وجبة عمل باغيت شاورما مكس عجل وخروف",
      "en": "Veal and Lamb Shawarma Baguette Combo Meal"
    },
    "fullDescription": {
      "he": "ארוחה עסקית באגט שווארמה מיקס עגל וכבש",
      "ar": "وجبة عمل باغيت شاورما مكس عجل وخروف",
      "en": "Veal and Lamb Shawarma Baguette Combo Meal"
    },
    "price": 87,
    "currency": "₪",
    "categoryKey": "comboMeals",
    "category": {
      "he": "מנות עסקיות",
      "ar": "وجبات عمل",
      "en": "Combo meal"
    },
    "image": "images/veal-lamb-shawarma-baguette-combo.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": false,
    "spicy": false,
    "note": {
      "he": "הארוחה כוללת שתייה וצ׳יפס.",
      "ar": "الوجبة تشمل مشروب وبطاطا مقلية.",
      "en": "Combo includes a drink and chips."
    }
  },
  {
    "id": 33,
    "name": {
      "he": "ארוחה עסקית לאפה שווארמה מיקס עגל וכבש",
      "ar": "وجبة عمل لفة شاورما مكس عجل وخروف",
      "en": "Veal and Lamb Shawarma Laffa Combo Meal"
    },
    "description": {
      "he": "ארוחה עסקית לאפה שווארמה מיקס עגל וכבש",
      "ar": "وجبة عمل لفة شاورما مكس عجل وخروف",
      "en": "Veal and Lamb Shawarma Laffa Combo Meal"
    },
    "fullDescription": {
      "he": "ארוחה עסקית לאפה שווארמה מיקס עגל וכבש",
      "ar": "وجبة عمل لفة شاورما مكس عجل وخروف",
      "en": "Veal and Lamb Shawarma Laffa Combo Meal"
    },
    "price": 87,
    "currency": "₪",
    "categoryKey": "comboMeals",
    "category": {
      "he": "מנות עסקיות",
      "ar": "وجبات عمل",
      "en": "Combo meal"
    },
    "image": "images/veal-lamb-shawarma-laffa-combo.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": false,
    "spicy": false,
    "note": {
      "he": "הארוחה כוללת שתייה וצ׳יפס.",
      "ar": "الوجبة تشمل مشروب وبطاطا مقلية.",
      "en": "Combo includes a drink and chips."
    }
  },
  {
    "id": 34,
    "name": {
      "he": "ארוחה עסקית פיתה פלאפל",
      "ar": "وجبة عمل بيتا فلافل",
      "en": "Falafel Pita Combo Meal"
    },
    "description": {
      "he": "ארוחה עסקית פיתה פלאפל",
      "ar": "وجبة عمل بيتا فلافل",
      "en": "Falafel Pita Combo Meal"
    },
    "fullDescription": {
      "he": "ארוחה עסקית פיתה פלאפל",
      "ar": "وجبة عمل بيتا فلافل",
      "en": "Falafel Pita Combo Meal"
    },
    "price": 40,
    "currency": "₪",
    "categoryKey": "comboMeals",
    "category": {
      "he": "מנות עסקיות",
      "ar": "وجبات عمل",
      "en": "Combo meal"
    },
    "image": "images/falafel-pita-combo.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "available": true,
    "vegetarian": true,
    "spicy": false,
    "note": {
      "he": "הארוחה כוללת שתייה וצ׳יפס.",
      "ar": "الوجبة تشمل مشروب وبطاطا مقلية.",
      "en": "Combo includes a drink and chips."
    }
  },
  {
    "id": 35,
    "name": {
      "he": "ארוחה עסקית באגט פלאפל",
      "ar": "وجبة عمل باغيت فلافل",
      "en": "Falafel Baguette Combo Meal"
    },
    "description": {
      "he": "ארוחה עסקית באגט פלאפל",
      "ar": "وجبة عمل باغيت فلافل",
      "en": "Falafel Baguette Combo Meal"
    },
    "fullDescription": {
      "he": "ארוחה עסקית באגט פלאפל",
      "ar": "وجبة عمل باغيت فلافل",
      "en": "Falafel Baguette Combo Meal"
    },
    "price": 45,
    "currency": "₪",
    "categoryKey": "comboMeals",
    "category": {
      "he": "מנות עסקיות",
      "ar": "وجبات عمل",
      "en": "Combo meal"
    },
    "image": "images/falafel-baguette-combo.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "note": {
      "he": "הארוחה כוללת שתייה וצ׳יפס.",
      "ar": "الوجبة تشمل مشروب وبطاطا مقلية.",
      "en": "Combo includes a drink and chips."
    },
    "available": true,
    "vegetarian": true,
    "spicy": false
  },
  {
    "id": 36,
    "name": {
      "he": "ארוחה עסקית לאפה פלאפל",
      "ar": "وجبة عمل لفة فلافل",
      "en": "Falafel Laffa Combo Meal"
    },
    "description": {
      "he": "ארוחה עסקית לאפה פלאפל",
      "ar": "وجبة عمل لفة فلافل",
      "en": "Falafel Laffa Combo Meal"
    },
    "fullDescription": {
      "he": "ארוחה עסקית לאפה פלאפל",
      "ar": "وجبة عمل لفة فلافل",
      "en": "Falafel Laffa Combo Meal"
    },
    "price": 45,
    "currency": "₪",
    "categoryKey": "comboMeals",
    "category": {
      "he": "מנות עסקיות",
      "ar": "وجبات عمل",
      "en": "Combo meal"
    },
    "image": "images/falafel-laffa-combo.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "note": {
      "he": "הארוחה כוללת שתייה וצ׳יפס.",
      "ar": "الوجبة تشمل مشروب وبطاطا مقلية.",
      "en": "Combo includes a drink and chips."
    },
    "available": true,
    "vegetarian": true,
    "spicy": false
  },
  {
    "id": 37,
    "name": {
      "he": "ארוחה עסקית פיתה שניצל",
      "ar": "وجبة عمل بيتا شنيتسل",
      "en": "Schnitzel Pita Combo Meal"
    },
    "description": {
      "he": "ארוחה עסקית פיתה שניצל",
      "ar": "وجبة عمل بيتا شنيتسل",
      "en": "Schnitzel Pita Combo Meal"
    },
    "fullDescription": {
      "he": "ארוחה עסקית פיתה שניצל",
      "ar": "وجبة عمل بيتا شنيتسل",
      "en": "Schnitzel Pita Combo Meal"
    },
    "price": 60,
    "currency": "₪",
    "categoryKey": "comboMeals",
    "category": {
      "he": "מנות עסקיות",
      "ar": "وجبات عمل",
      "en": "Combo meal"
    },
    "image": "images/schnitzel-pita-combo.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "note": {
      "he": "הארוחה כוללת שתייה וצ׳יפס.",
      "ar": "الوجبة تشمل مشروب وبطاطا مقلية.",
      "en": "Combo includes a drink and chips."
    },
    "available": true,
    "vegetarian": false,
    "spicy": false
  },
  {
    "id": 38,
    "name": {
      "he": "ארוחה עסקית באגט שניצל",
      "ar": "وجبة عمل باغيت شنيتسل",
      "en": "Schnitzel Baguette Combo Meal"
    },
    "description": {
      "he": "ארוחה עסקית באגט שניצל",
      "ar": "وجبة عمل باغيت شنيتسل",
      "en": "Schnitzel Baguette Combo Meal"
    },
    "fullDescription": {
      "he": "ארוחה עסקית באגט שניצל",
      "ar": "وجبة عمل باغيت شنيتسل",
      "en": "Schnitzel Baguette Combo Meal"
    },
    "price": 65,
    "currency": "₪",
    "categoryKey": "comboMeals",
    "category": {
      "he": "מנות עסקיות",
      "ar": "وجبات عمل",
      "en": "Combo meal"
    },
    "image": "images/schnitzel-baguette-combo.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "note": {
      "he": "הארוחה כוללת שתייה וצ׳יפס.",
      "ar": "الوجبة تشمل مشروب وبطاطا مقلية.",
      "en": "Combo includes a drink and chips."
    },
    "available": true,
    "vegetarian": false,
    "spicy": false
  },
  {
    "id": 39,
    "name": {
      "he": "ארוחה עסקית לאפה שניצל",
      "ar": "وجبة عمل لفة شنيتسل",
      "en": "Schnitzel Laffa Combo Meal"
    },
    "description": {
      "he": "ארוחה עסקית לאפה שניצל",
      "ar": "وجبة عمل لفة شنيتسل",
      "en": "Schnitzel Laffa Combo Meal"
    },
    "fullDescription": {
      "he": "ארוחה עסקית לאפה שניצל",
      "ar": "وجبة عمل لفة شنيتسل",
      "en": "Schnitzel Laffa Combo Meal"
    },
    "price": 65,
    "currency": "₪",
    "categoryKey": "comboMeals",
    "category": {
      "he": "מנות עסקיות",
      "ar": "وجبات عمل",
      "en": "Combo meal"
    },
    "image": "images/schnitzel-laffa-combo.png",
    "badge": {
      "he": "חדש",
      "ar": "جديد",
      "en": "New"
    },
    "note": {
      "he": "הארוחה כוללת שתייה וצ׳יפס.",
      "ar": "الوجبة تشمل مشروب وبطاطا مقلية.",
      "en": "Combo includes a drink and chips."
    },
    "available": true,
    "vegetarian": false,
    "spicy": false
  },
  {
    "id": 40,
    "name": {
      "he": "קוקה קולה",
      "ar": "كوكا كولا",
      "en": "Coca-Cola"
    },
    "description": {
      "he": "קוקה קולה",
      "ar": "كوكا كولا",
      "en": "Coca-Cola"
    },
    "fullDescription": {
      "he": "קוקה קולה",
      "ar": "كوكا كولا",
      "en": "Coca-Cola"
    },
    "price": 10,
    "currency": "₪",
    "categoryKey": "drinks",
    "category": {
      "he": "שתייה",
      "ar": "مشروبات",
      "en": "Drinks"
    },
    "image": "images/coca-cola.png",
    "badge": {
      "he": "שתייה",
      "ar": "مشروب",
      "en": "Drink"
    },
    "available": true,
    "vegetarian": true,
    "spicy": false
  },
  {
    "id": 41,
    "name": {
      "he": "קוקה קולה זירו",
      "ar": "كوكا كولا زيرو",
      "en": "Coca-Cola Zero"
    },
    "description": {
      "he": "קוקה קולה זירו",
      "ar": "كوكا كولا زيرو",
      "en": "Coca-Cola Zero"
    },
    "fullDescription": {
      "he": "קוקה קולה זירו",
      "ar": "كوكا كولا زيرو",
      "en": "Coca-Cola Zero"
    },
    "price": 10,
    "currency": "₪",
    "categoryKey": "drinks",
    "category": {
      "he": "שתייה",
      "ar": "مشروبات",
      "en": "Drinks"
    },
    "image": "images/coca-cola-zero.png",
    "badge": {
      "he": "שתייה",
      "ar": "مشروب",
      "en": "Drink"
    },
    "available": true,
    "vegetarian": true,
    "spicy": false
  },
  {
    "id": 42,
    "name": {
      "he": "ספרייט",
      "ar": "سبرايت",
      "en": "Sprite"
    },
    "description": {
      "he": "ספרייט",
      "ar": "سبرايت",
      "en": "Sprite"
    },
    "fullDescription": {
      "he": "ספרייט",
      "ar": "سبرايت",
      "en": "Sprite"
    },
    "price": 10,
    "currency": "₪",
    "categoryKey": "drinks",
    "category": {
      "he": "שתייה",
      "ar": "مشروبات",
      "en": "Drinks"
    },
    "image": "images/sprite.png",
    "badge": {
      "he": "שתייה",
      "ar": "مشروب",
      "en": "Drink"
    },
    "available": true,
    "vegetarian": true,
    "spicy": false
  },
  {
    "id": 43,
    "name": {
      "he": "ספרייט זירו",
      "ar": "سبرايت زيرو",
      "en": "Sprite Zero"
    },
    "description": {
      "he": "ספרייט זירו",
      "ar": "سبرايت زيرو",
      "en": "Sprite Zero"
    },
    "fullDescription": {
      "he": "ספרייט זירו",
      "ar": "سبرايت زيرو",
      "en": "Sprite Zero"
    },
    "price": 10,
    "currency": "₪",
    "categoryKey": "drinks",
    "category": {
      "he": "שתייה",
      "ar": "مشروبات",
      "en": "Drinks"
    },
    "image": "images/sprite-zero.png",
    "badge": {
      "he": "שתייה",
      "ar": "مشروب",
      "en": "Drink"
    },
    "available": true,
    "vegetarian": true,
    "spicy": false
  },
  {
    "id": 44,
    "name": {
      "he": "XL",
      "ar": "مشروب طاقة XL",
      "en": "XL Energy Drink"
    },
    "description": {
      "he": "XL",
      "ar": "مشروب طاقة XL",
      "en": "XL Energy Drink"
    },
    "fullDescription": {
      "he": "XL",
      "ar": "مشروب طاقة XL",
      "en": "XL Energy Drink"
    },
    "price": 10,
    "currency": "₪",
    "categoryKey": "drinks",
    "category": {
      "he": "שתייה",
      "ar": "مشروبات",
      "en": "Drinks"
    },
    "image": "images/xl-energy-drink.png",
    "badge": {
      "he": "שתייה",
      "ar": "مشروب",
      "en": "Drink"
    },
    "available": true,
    "vegetarian": true,
    "spicy": false
  },
  {
    "id": 45,
    "name": {
      "he": "פריגת ענבים",
      "ar": "عصير عنب بريجات",
      "en": "Prigat Grape Juice"
    },
    "description": {
      "he": "פריגת ענבים",
      "ar": "عصير عنب بريجات",
      "en": "Prigat Grape Juice"
    },
    "fullDescription": {
      "he": "פריגת ענבים",
      "ar": "عصير عنب بريجات",
      "en": "Prigat Grape Juice"
    },
    "price": 10,
    "currency": "₪",
    "categoryKey": "drinks",
    "category": {
      "he": "שתייה",
      "ar": "مشروبات",
      "en": "Drinks"
    },
    "image": "images/prigat-grape-juice.png",
    "badge": {
      "he": "שתייה",
      "ar": "مشروب",
      "en": "Drink"
    },
    "available": true,
    "vegetarian": true,
    "spicy": false
  },
  {
    "id": 46,
    "name": {
      "he": "פריגת תות בננה",
      "ar": "عصير فراولة وموز بريجات",
      "en": "Prigat Strawberry Banana Juice"
    },
    "description": {
      "he": "פריגת תות בננה",
      "ar": "عصير فراولة وموز بريجات",
      "en": "Prigat Strawberry Banana Juice"
    },
    "fullDescription": {
      "he": "פריגת תות בננה",
      "ar": "عصير فراولة وموز بريجات",
      "en": "Prigat Strawberry Banana Juice"
    },
    "price": 10,
    "currency": "₪",
    "categoryKey": "drinks",
    "category": {
      "he": "שתייה",
      "ar": "مشروبات",
      "en": "Drinks"
    },
    "image": "images/prigat-strawberry-banana-juice.png",
    "badge": {
      "he": "שתייה",
      "ar": "مشروب",
      "en": "Drink"
    },
    "available": true,
    "vegetarian": true,
    "spicy": false
  },
  {
    "id": 47,
    "name": {
      "he": "פריגת לימונענע",
      "ar": "عصير ليمون ونعناع بريجات",
      "en": "Prigat Lemon Mint Juice"
    },
    "description": {
      "he": "פריגת לימונענע",
      "ar": "عصير ليمون ونعناع بريجات",
      "en": "Prigat Lemon Mint Juice"
    },
    "fullDescription": {
      "he": "פריגת לימונענע",
      "ar": "عصير ليمون ونعناع بريجات",
      "en": "Prigat Lemon Mint Juice"
    },
    "price": 10,
    "currency": "₪",
    "categoryKey": "drinks",
    "category": {
      "he": "שתייה",
      "ar": "مشروبات",
      "en": "Drinks"
    },
    "image": "images/prigat-lemon-mint-juice.png",
    "badge": {
      "he": "שתייה",
      "ar": "مشروب",
      "en": "Drink"
    },
    "available": true,
    "vegetarian": true,
    "spicy": false
  },
  {
    "id": 48,
    "name": {
      "he": "סודה",
      "ar": "مياه غازية",
      "en": "Soda Water"
    },
    "description": {
      "he": "סודה",
      "ar": "مياه غازية",
      "en": "Soda Water"
    },
    "fullDescription": {
      "he": "סודה",
      "ar": "مياه غازية",
      "en": "Soda Water"
    },
    "price": 10,
    "currency": "₪",
    "categoryKey": "drinks",
    "category": {
      "he": "שתייה",
      "ar": "مشروبات",
      "en": "Drinks"
    },
    "image": "images/soda-water.png",
    "badge": {
      "he": "שתייה",
      "ar": "مشروب",
      "en": "Drink"
    },
    "available": true,
    "vegetarian": true,
    "spicy": false
  },
  {
    "id": 49,
    "name": {
      "he": "מים מינרליים",
      "ar": "مياه معدنية",
      "en": "Mineral Water"
    },
    "description": {
      "he": "מים מינרליים",
      "ar": "مياه معدنية",
      "en": "Mineral Water"
    },
    "fullDescription": {
      "he": "מים מינרליים",
      "ar": "مياه معدنية",
      "en": "Mineral Water"
    },
    "price": 10,
    "currency": "₪",
    "categoryKey": "drinks",
    "category": {
      "he": "שתייה",
      "ar": "مشروبات",
      "en": "Drinks"
    },
    "image": "images/mineral-water.png",
    "badge": {
      "he": "שתייה",
      "ar": "مشروب",
      "en": "Drink"
    },
    "available": true,
    "vegetarian": true,
    "spicy": false
  }
];

