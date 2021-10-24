import { sample } from "lodash";

class SetUp {
  letters: Array<string> = [
    "a",
    "b",
    "c",
    "e",
    "f",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  words: Array<string> = [
    "california",
    "Supercalifragilisticexpialidocious",
    "foxglove",
    "frazzled",
  ];

  displayLetters = (arr: Array<string>): void => {
    let parent = document.getElementById("letters");
    arr.map((letter) => {
      let button = document.createElement("button");
      button.className = "letter-btn";
      button.textContent = letter;
      return parent?.appendChild(button);
    });
  };

  getWord = (arr: Array<string>): string => {
    return sample(arr);
  };

  displayDashes = (word: string): Array<string> => {
    //TODO: finish dashes
    return word.split("").map((w) => "-");
  };
}

export { SetUp };
