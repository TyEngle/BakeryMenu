/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    id: "p01",
    title: "alexandertorte",
    description: "pastry strips filled with berries",
    price: "3.00",
    discontinued: "",
    category: ["ctg01pstr"],
  },
  {
    id: "p02",
    title: "chin chin",
    description: "deep fried pieces of fine cut dough",
    price: "3.00",
    discontinued: "",
    category: ["ctg01pstr"],
  },
  {
    id: "p03",
    title: "fruit strudel",
    description: "sliced fruit wrapped and cooked in layers of filo pastry",
    price: "3.00",
    discontinued: "",
    category: ["ctg01pstr"],
  },
  {
    id: "p04",
    title: "bear claw",
    description: "sweet yeast-raised breakfast pastry",
    price: "3.00",
    discontinued: "",
    category: ["ctg01pstr"],
  },
  {
    id: "p05",
    title: "baklava",
    description:
      "layers of filo pastry filled with chopped nuts\
      and sweetened with honey syrup",
    price: "3.00",
    discontinued: "",
    category: ["ctg01pstr"],
  },
  {
    id: "p06",
    title: "fruit pie",
    description:
      "top-and-bottom crusted pastry with fruit and sugary-filling between",
    price: "6.00",
    discontinued: "",
    category: ["ctg01pstr"],
  },
  {
    id: "p07",
    title: "beaver tail",
    description:
      "fried and hand stretched pastry dough with toppings of choice\
      ranging from jams to sugars to butters",
    price: "6.00",
    discontinued: "",
    category: ["ctg01pstr"],
  },
  {
    id: "c01",
    title: "butter cookie",
    description:
      "crisp unleavened cookies flavored with vanilla chocolate or coconut",
    price: "2.00",
    discontinued: "",
    category: ["ctg02ckie"],
  },
  {
    id: "c02",
    title: "broas",
    description: "filipino ladyfinger like cookie",
    price: "2.00",
    discontinued: "",
    category: ["ctg02ckie"],
  },
  {
    id: "c03",
    title: "millionaire shortcake",
    description: "shortbread cookie with a layer of caramel and chocolate",
    price: "2.00",
    discontinued: "",
    category: ["ctg02ckis"],
  },
  {
    id: "c04",
    title: "coyotas",
    description:
      "mexican flat cookies with brown sugar made from molasses inside",
    price: "2.00",
    discontinued: "true",
    category: ["ctg02ckie"],
  },
  {
    id: "c05",
    title: "oatmeal raisin",
    description: "drop cookie made of oatmeal based dough with raisins",
    price: "2.00",
    discontinued: "",
    category: ["ctg02ckie"],
  },
  {
    id: "c06",
    title: "jammie dodgers",
    description: "fruit jam sandwiched together by two shortbread biscuits",
    price: "2.00",
    discontinued: "",
    category: ["ctg02ckie"],
  },
  {
    id: "c07",
    title: "chocolate chunk",
    description: "drop cookie with chocolate pieces",
    price: "2.00",
    discontinued: "",
    category: ["ctg02ckie"],
  },
  {
    id: "b01",
    title: "anpan",
    description: "japanese sweet bun filled with red bean paste",
    price: "5.00",
    discontinued: "",
    category: ["ctg03bred"],
  },
  {
    id: "b02",
    title: "bagel",
    description: "dense ring shaped wheat bread with a chewy like interior",
    price: "5.00",
    discontinued: "",
    category: ["ctg03bred"],
  },
  {
    id: "b03",
    title: "baguette",
    description: "french elongated yeast bread",
    price: "5.00",
    discontinued: "",
    category: ["ctg03bred"],
  },
  {
    id: "b04",
    title: "banana bread",
    description: "quick bread made mainly of mashed bananas",
    price: "5.00",
    discontinued: "",
    category: ["ctg03bred"],
  },
  {
    id: "b05",
    title: "biscuit",
    description: "american light and fluffy quick bread",
    price: "5.00",
    discontinued: "true",
    category: ["ctg03bred"],
  },
  {
    id: "b06",
    title: "crepe",
    description:
      "thin pancakes from france\
    which can be stuffed with an assortment of foods",
    price: "5.00",
    discontinued: "",
    category: ["ctg03bred"],
  },
  {
    id: "b07",
    title: "black bread",
    description: "russian rye grain mainly dense and chewy",
    price: "5.00",
    discontinued: "",
    category: ["ctg03bred"],
  },
];
