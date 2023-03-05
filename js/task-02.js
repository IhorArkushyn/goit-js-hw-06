const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];



const listArray = ingredients.map((ingredient) => {
  const listElem = document.createElement("li");
  listElem.classList = "item";
  listElem.textContent = ingredient;
  return listElem;
});

document.querySelector("ul").append(...listArray);

// console.log(...listArray)
