let letter;
const letters = [
  ["t", "l", "w"],
  ["w", "t", "l"],
  ["l", "w", "t"],
];

function Calculatetext(num) {
  let result = "";
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
        console.log(result);

        return result;
      }
    }
  }

  console.log("something went wrong");
  return;
}

export default Calculatetext;
