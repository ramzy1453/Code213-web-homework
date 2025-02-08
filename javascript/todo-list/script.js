let inputEl = document.querySelector(".todo-container .input-container input");
let buttonEl = document.querySelector(
  ".todo-container .input-container button"
);

let ul = document.querySelector(".todo-box");

// Size of items
let sizeItemsEl = document.querySelector(".size-items");
let counter = 0;

buttonEl.addEventListener("click", function whenClick() {
  let newDiv = document.createElement("div");

  newDiv.classList.add("todo-item");
  newDiv.classList.add("light-item");

  let X = document.createElement("span");
  X.classList.add("delete");
  X.textContent = "X";

  newDiv.innerHTML = `
    <span class="todo-title">${inputEl.value}</span>
  `;

  newDiv.appendChild(X);

  newDiv.addEventListener("click", function whenClick() {
    newDiv.style.textDecoration = "line-through";
  });

  X.addEventListener("click", function whenClickOnDelete() {
    newDiv.remove();
    counter--;
    sizeItemsEl.textContent = counter;
  });

  ul.appendChild(newDiv);

  counter++;
  sizeItemsEl.textContent = counter;

  document.querySelector(".no-items").style.display = "none";
});

// Dark Mode
let darkModeBtn = document.querySelector(".dark-mode");
let todoContainer = document.querySelector(".todo-container");

darkModeBtn.addEventListener("click", function whenClick() {
  document.body.classList.toggle("dark-main");
  document.body.classList.toggle("light-main");

  todoContainer.classList.toggle("dark-todo-container");
  todoContainer.classList.toggle("light-todo-container");

  let items = document.querySelectorAll(".todo-item");

  for (let i = 0; i < items.length; i++) {
    items[i].classList.toggle("dark-item");
    items[i].classList.toggle("light-item");
  }

  // Change text of button
  if (darkModeBtn.textContent === "Dark Mode") {
    darkModeBtn.textContent = "Light Mode";
  } else if (darkModeBtn.textContent === "Light Mode") {
    darkModeBtn.textContent = "Dark Mode";
  }
});

// Timer
let time = 0;
let timeEl = document.querySelector(".time");
setInterval(function timer() {
  time++;
  timeEl.textContent = time;
}, 1000);
