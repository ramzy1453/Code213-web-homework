let boxes = document.querySelectorAll(".box");
let isMyTurn = true;

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    let box = boxes[i];
    if (box.textContent === "") {
      if (isMyTurn === true) {
        box.textContent = "X";
      } else {
        box.textContent = "O";
      }

      if (isMyTurn === true) {
        isMyTurn = false;
      } else {
        isMyTurn = true;
      }

      if (checkWin("X") === true) {
        alert("You won");
      }

      if (checkWin("O") === true) {
        alert("You lose");
      }
    }
  });
}

function checkWin(player) {
  if (
    (boxes[0].textContent === player &&
      boxes[1].textContent === player &&
      boxes[2].textContent === player) ||
    (boxes[3].textContent === player &&
      boxes[4].textContent === player &&
      boxes[5].textContent === player) ||
    (boxes[6].textContent === player &&
      boxes[7].textContent === player &&
      boxes[8].textContent === player) ||
    (boxes[0].textContent === player &&
      boxes[3].textContent === player &&
      boxes[6].textContent === player) ||
    (boxes[1].textContent === player &&
      boxes[4].textContent === player &&
      boxes[7].textContent === player) ||
    (boxes[2].textContent === player &&
      boxes[5].textContent === player &&
      boxes[8].textContent === player) ||
    (boxes[0].textContent === player &&
      boxes[4].textContent === player &&
      boxes[8].textContent === player) ||
    (boxes[2].textContent === player &&
      boxes[4].textContent === player &&
      boxes[6].textContent === player)
  ) {
    return true;
  } else {
    return false;
  }
}
