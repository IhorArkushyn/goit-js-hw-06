// const list = document.querySelector(".gallery");

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const markup = images
  .map((image) => `<li><img src="${image.url}" alt="${image.alt}"></li>`)
  .join("");



const list = document.querySelector(".gallery");
list.style.cssText = `
display: flex;
list-style: none;
gap: 30px`;


// const listElem = document.querySelector("markup");
// console.log(listElem)

// const qwer = document.querySelector("ul.li");;
// console.log(qwer);
// const qwer = document.body;
// const rewq = qwer.children;
// console.log( rewq)

// qwer.style.cssText = `
// height: 200px;
// wigth: 200px;`;

list.insertAdjacentHTML("afterbegin", markup);
