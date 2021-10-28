import { sample } from "lodash";

class SetUp {
  letters: Array<string> = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
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
      button.setAttribute("id", letter);
      button.textContent = letter;
      // button.addEventListener("click", this.getIDAsString);
      return parent?.appendChild(button);
    });
  };

  /**
   *
   * @param event
   * @returns The id of the letter button
   */
  getIDAsString = (event: Event): string => {
    return (event.target as HTMLElement).id;
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
