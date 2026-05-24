export const products = [
  {
    id: 1,
    slug: "healthy-laddoo",
    name: "Paushtik / Protein Laddoo",
    shortDescription:
      "A nutritious laddoo made with wholesome ingredients, ideal for daily energy and protein support.",
    description:
      "HuHerb Paushtik Laddoo is a healthy and protein-rich traditional sweet made for people who want both taste and nutrition. It is suitable for children, students, working professionals, and health-conscious families.",
    category: "Snacks",
    ingredients: ["Emmer Wheat(Khapli Gahu)", "Jaggery", "Dry fruits(Almond, Cashew, Walnut, Pista)", "Ghee", "Pumpkin Seeds", "Sunflower Seeds", "Chia Seeds", "Garden Cress seeds(Halim)", "Sesame Seeds", "Dried Dates", "Nutmeg", "Oats", "Fox Nut(Makhana)", "Dink(also known as Edible gum)", "Dry Coconut", "Cardamom", "Poppy seeds", "Ginger"],
    benefits: [
      "Good source of energy",
      "Traditional homemade taste",
      "Made with natural ingredients",
    ],
    weight: "180g",
    price: "₹250",
    image: "/products/paushtik-laddoo.JPG",
    images: ["/products/paushtik-laddoo.JPG", 
      "/products/paushtik-laddoo-1.jpeg"
    ],
  },
  {
    id: 2,
    slug: "nachni-laddoo",
    name: "Nachni(Finger Millet) Laddoo",
    shortDescription:
      "Traditional nachni laddoo made using ragi, known for its rich nutritional value.",
    description:
      "HuHerb Nachni(Finger Millet) Laddoo is made using nachni, also known as ragi. It offers a traditional taste with the natural goodness of millets and is a great choice for everyday healthy snacking.",
    category: "Snacks",
    ingredients: ["Finger Millet", "Jaggery", "Dry fruits(Almond, Cashew, Walnut, Pistachio)", "Ghee", "Pumpkin Seeds", "Sunflower Seeds", "Chia Seeds", "Garden Cress seeds(Halim)", "Sesame Seeds", "Dried Dates", "Nutmeg", "Oats", "Fox Nut(Makhana)", "Dink(also known as Edible gum)", "Dry Coconut", "Cardamom"],
    benefits: [
      "Good source of energy",
      "Traditional homemade taste",
      "Made with natural ingredients",
    ],
    weight: "180g",
    price: "₹270",
    image: "/products/nachni-laddoo.JPG",
    images: ["/products/nachni-laddoo.JPG", "/products/nachni-laddoo-1.jpeg"],
  },
   {
    id: 3,
    slug: "methi-laddoo",
    name: "Methi Laddoo",
    shortDescription:
      "A traditional methi laddoo prepared with fenugreek and natural ingredients.",    
    description:
      "HuHerb Methi Laddoo is a traditional food product made with methi, also known as fenugreek. It is commonly enjoyed for its unique taste and traditional wellness value.",
    category: "Snacks",
    ingredients: ["Wheat", "Fenugreek", "Jaggery", "Dry fruits(Almond, Cashew, Walnut, Pista)", "Ghee", "Pumpkin Seeds", "Sunflower Seeds", "Chia Seeds", "Garden Cress seeds(Halim)", "Sesame Seeds", "Dried Dates", "Nutmeg", "Oats", "Fox Nut(Makhana)", "Dink(also known as Edible gum)", "Dry Coconut", "Cardamom", "Poppy seeds", "Ginger"],
    benefits: [
      "Good source of energy",
      "Traditional homemade taste",
      "Made with natural ingredients",
    ],
    weight: "180g",
    price: "₹240",
    image: "/products/methi-laddoo.jpeg",
    images: ["/products/methi-laddoo.jpeg"],
  },
  {
    id: 4,
    slug: "turmeric-powder",
    name: "Turmeric Powder",
    shortDescription:
      "Pure turmeric powder with natural color, aroma, and traditional wellness value.",
    description:
      "HuHerb Turmeric Powder is prepared from quality turmeric roots. It is suitable for cooking, wellness drinks, and daily kitchen use.",
    category: "Spices",
    ingredients: ["Pure turmeric"],
    benefits: [
      "Natural color and aroma",
      "Useful for cooking",
      "Traditional wellness ingredient",
    ],
    weight: "200g",
    price: "₹80",
    image: "/products/turmeric.JPG",
    images: ["/products/turmeric.JPG", "/products/turmeric-1.png"],
    variants: [
  {
    name: "Selam Turmeric",
    details: {
      botanicalName: "Curcuma longa",
      origin: "Erode / Salem Region, Tamil Nadu, India",
      variety: "Selam Finger",
      physicalForm: "Whole dried turmeric fingers",
      color: "Bright Yellow to Golden Orange",
      aroma:
        "Strong, earthy, characteristic turmeric aroma",
      taste:
        "Slightly bitter and pungent",
      curcuminContent:
        "Minimum 3% (HPLC verified)",
      moisture:
        "Max 10%",
      fingerLength:
        "Usually 3 cm – 12 cm",
      brokenFingers:
        "Max 3%",
      foreignMatterImpurities:
        "Max 0.5% – 2%",
      bulbsContent:
        "Max 3%",
      processing:
        "Single Polished / Double Polished / Unpolished",
      purity:
        "98% – 99%+",
      shelfLife:
        "12 – 24 Months",
      packing:
        "25 kg / 50 kg PP Bags or Jute Bags",
      storage:
        "Cool & Dry Place",
      salmonella:
        "Absent in 25g",
      aflatoxinB1:
        "Max 5 µg/kg",
      illegalDyes:
        "Sudan, Para Red absent / max 0.5 ppm",
      pesticideMRL:
        "Compliant with UK/EU Regulation EC 396/2005",
      heavyMetals:
        "Within UK permitted limits",
      usage:
        "Spice Industry, Food Processing, Ayurveda, Curcumin Extraction"
    }
  },

  {
    name: "Nizamabad Turmeric",
    details: {
      botanicalName: "Curcuma longa",
      origin:
        "Nizamabad, Telangana, India",
      variety:
        "Nizamabad Finger",
      physicalForm:
        "Whole dried turmeric fingers",
      color:
        "Bright Yellow to Golden Orange",
      aroma:
        "Strong, earthy, characteristic turmeric aroma",
      taste:
        "Slightly bitter and pungent",
      curcuminContent:
        "Typically 2% – 5% (custom grades available)",
      moisture:
        "Max 8% – 12%",
      fingerLength:
        "Usually 3 cm – 14 cm",
      brokenFingers:
        "Max 3%",
      foreignMatterImpurities:
        "Max 0.5% – 2%",
      bulbsContent:
        "Max 3%",
      processing:
        "Single Polished / Double Polished / Unpolished",
      purity:
        "98% – 99%+",
      shelfLife:
        "12 – 24 Months",
      packing:
        "25 kg / 50 kg PP Bags or Jute Bags",
      storage:
        "Cool & Dry Place",
      salmonella:
        "Absent in 25g",
      aflatoxinB1:
        "Max 5 µg/kg",
      illegalDyes:
        "Sudan, Para Red absent / max 0.5 ppm",
      pesticideMRL:
        "Compliant with UK/EU Regulation EC 396/2005",
      heavyMetals:
        "Within UK permitted limits",
      usage:
        "Spice Industry, Food Processing, Ayurveda, Curcumin Extraction"
    }
  }
]
  },
];