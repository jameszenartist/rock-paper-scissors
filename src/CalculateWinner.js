// R = 0, P = 1, S = 2

// R - S WIN 0 - 2
// R - P LOSE 0 - 1
// P - R WIN 1 - 0
// P - S LOSE 1 - 2
// S - P WIN 2 - 1
// S - R LOSE 2 - 0

let choice;
let resultText = "";
let letter;
const letters = [
  ["t", "l", "w"],
  ["w", "t", "l"],
  ["l", "w", "t"],
];

choice = 1;
resultText = calcWinner(choice);
console.log(resultText);

function calcWinner(num) {
  let result;
  let comp = Math.floor(Math.random() * (3 - 0) + 0);

  console.log("player's choice is: ", num);
  console.log("computer's choice is: ", comp);
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters.length; j++) {
      if (num === i && comp === j) {
        letter = letters[i][j];
        letter === "t"
          ? (result = "IT'S A TIE!")
          : letter === "l"
          ? (result = "YOU LOSE!")
          : (result = "YOU WIN!");
        console.log(letters[i][j]);
        return result;
      }
    }
  }

  console.log("something went wrong");
  return;
}
