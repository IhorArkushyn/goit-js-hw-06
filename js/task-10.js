const refs = {
  amountEl: document.querySelector("#controls input"),
  createEl: document.querySelector("button[data-create]"),
  destroyEl: document.querySelector("button[data-destroy]"),
  boxesEl: document.querySelector("#boxes"),
};

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    let elem = document.createElement("div");

    refs.amountEl.style.marginBottom = 10 + "px";
    elem.style.backgroundColor = getRandomHexColor();
    elem.style.width = 30 + 10 * i + "px";
    elem.style.height = 30 + 10 * i + "px";
    elem.style.marginBottom = 10 + "px";

    refs.boxesEl.append(elem);
  }
}

refs.createEl.addEventListener("click", function () {
  let amount = refs.amountEl.value;
  if (amount > 0) {
    createBoxes(amount);
  }
});

refs.destroyEl.addEventListener("click", function () {
  refs.boxesEl.innerHTML = "";
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
