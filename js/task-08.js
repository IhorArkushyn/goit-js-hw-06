const form = document.querySelector(".login-form");


form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const emailValue = event.target.elements.email.value;
  const passwordValue = event.target.elements.password.value;
  const result = {
    email: emailValue,
    password: passwordValue,
  };

  if (!emailValue || !passwordValue) {
    return alert("Please fill in all the fields!");
  } else {
    console.log(result);
  }
  event.target.reset();
}

// const formData = new FormData(event.target);

// formData.forEach((value, name) => {
//   const emailValue = value;
//   const passwordKey = name;
//   // console.log(emailValue);
//   // console.log(passwordKey);
//   // console.log(name);
//   // console.log(value);
// });
