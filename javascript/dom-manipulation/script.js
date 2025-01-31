// 1 - Acceding to HTML element and modify them

// 1 - 1 Get Element By Id
let usernameElement = document.getElementById("username");

usernameElement.textContent = "Racim";

// Get Element by Class
let inputs = document.getElementsByClassName("number-input");

console.log(inputs[0]);

// Get Element by Tag Name

let paragraphs = document.getElementsByTagName("p");

paragraphs[0].textContent = "Salam";
paragraphs[1].textContent = "Alaykom";

// Get Element by Query Selector

let spanElement = document.querySelector("body > h1 > span");
console.log(spanElement);

// 2 - Accessing to the inner HTML code

let ul = document.querySelector("ul");

ul.innerHTML += `

<li>C</li>
<li>C++</li>
<li>Java</li>

`;

// 3 - Modify HTML Attributes
inputs[0].setAttribute("type", "date");

let image = document.querySelector("img");

image.setAttribute("width", "300");

// 4 - Modify CSS Properties
// spanElement.style.color = "blue";
// spanElement.style.backgroundColor = "red";
// spanElement.style.border = "2px solid black";
// spanElement.style.fontSize = "20px";

// Alternative way
spanElement.classList.add("myClass"); // add a new class

spanElement.classList.remove("myClass"); // remove a class

// 5 - Creating and removing HTML Element
