// 1 - Acceding to HTML element and modify them

// 1.1 Get Element By Id
let usernameElement = document.getElementById("username");

// Get Element by Class
let inputs = document.getElementsByClassName("number-input");

// Get Element by Tag Name

let paragraphs = document.getElementsByTagName("p");

paragraphs[0].textContent = "Salam";
paragraphs[1].textContent = "Alaykom";

// Get Element by Query Selector

let spanElement = document.querySelector("body > h1 > span");
spanElement.textContent = "Wassim";

// 1.2 - Accessing to the inner HTML code

let ul = document.querySelector("ul");

ul.innerHTML += `

<li>Java</li>

`;

// 1.3 - Modify HTML Attributes
inputs[0].setAttribute("type", "date");

let image = document.querySelector("img");

image.setAttribute("width", "300");

// 1.4 - Modify CSS Properties
spanElement.style.color = "blue";
spanElement.style.backgroundColor = "red";
spanElement.style.border = "2px solid black";
spanElement.style.fontSize = "20px";

// Alternative way
spanElement.classList.add("myClass"); // add a new class

spanElement.classList.remove("myClass"); // remove a class

// 1.5 - removing HTML Element
// image.remove();

// 2 - Events (click button, hover on mouse, press keyboard, scroll ext...)

let btnAdd = document.querySelector(".add");
console.log(btnAdd);

// Add Event Listener to a button when you click on it

usernameElement.addEventListener("click", function whenClick() {
  usernameElement.textContent = "Ahmed";
});

// I want to add a dark mode when I hover on the button
document.body.classList.add("light-mode");

btnAdd.addEventListener("mouseover", function whenHover() {
  document.body.classList.add("dark-mode");
  document.body.classList.remove("light-mode");
});

btnAdd.addEventListener("mouseout", function whenHover() {
  document.body.classList.add("light-mode");
  document.body.classList.remove("dark-mode");
});

// When you click on add button, add a new list item
btnAdd.addEventListener("click", function whenClick() {
  ul.innerHTML += `<li>Test</li>`;
});

// When you click on remove button, remove the last list item
let removeBtn = document.querySelector(".remove");
removeBtn.addEventListener("click", function whenClick() {
  ul.lastElementChild.remove();
});
