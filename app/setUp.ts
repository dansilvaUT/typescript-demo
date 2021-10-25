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

  /**
   *
   * @param arr
   */
  displayLetters = (arr: Array<string>): void => {
    let parent = document.getElementById("letters");
    arr.map((letter) => {
      let button = document.createElement("button");
      button.className = "letter-btn";
      button.textContent = letter;
      return parent?.appendChild(button);
    });
  };

  /**
   *
   * @param arr
   * @returns A string, which is the word the user will try to guess.
   */
  getWord = (arr: Array<string>): string => {
    return sample(arr)?.toLowerCase()!;
  };

  /**
   *
   * @param word
   * @returns A string that is comprised of dashes.
   */
  convertToDashes = (word: Array<string>): string => {
    return word.map((w) => "-").join("");
  };
}

export { SetUp };
