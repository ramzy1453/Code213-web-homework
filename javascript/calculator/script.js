let numbers = document.querySelectorAll(".number");
let resultatEl = document.querySelector(".resultat");
let result = "";

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    if (numbers[i].textContent === "C") {
      result = "";
    } else if (numbers[i].textContent === "=") {
      result = eval(result);
    } else {
      result = result + numbers[i].textContent;
    }

    resultatEl.textContent = result;
  });
}
