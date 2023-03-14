
const textInput = document.querySelector("input#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const text = event.target.value;
  if (!text) { 
    // console.log(output.textContent);
    output.textContent = "Anonymous";
  } else {
    output.textContent = text;
  }
});
