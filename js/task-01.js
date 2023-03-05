

const listItem = document.querySelectorAll("li.item");
console.log(`Number of categories:  ${listItem.length}`);

console.log("");

listItem.forEach((item) => {
  console.log(`Category:  ${item.firstElementChild.textContent}`);
  console.log(`Elements:  ${item.querySelectorAll("li").length}`);
  console.log("");
});


