
const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  const value = event.currentTarget.value;
  const length = parseInt(event.currentTarget.getAttribute("data-length"));

  if (value.length === length) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.remove("invalid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.remove("valid");
  }
});
