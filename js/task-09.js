const changeColorBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  let hexColor = getRandomHexColor();
  document.body.style.backgroundColor = hexColor;
  colorName.textContent = hexColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
