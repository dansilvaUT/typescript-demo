import { SetUp } from "./setUp";
import { messages } from "./messages";
class Game {
  startGame: SetUp;
  word: Array<string>;
  guessedLetters: Array<string>;
  dashes: string;
  /**
   * Constructor initializes set up class
   */
  constructor() {
    this.startGame = new SetUp();
  }

  /**
   * Sets the local word instance variable to an array of letters.
   */
  setGameWords = (): void => {
    this.word = this.startGame.getWord(this.startGame.words).split("");
  };

  /**
   * Renders dashes based on the number of letters in instance word variable
   */
  displayDashes = (): void => {
    this.dashes = this.startGame.convertToDashes(this.word);
  };

  /**
   *
   * @param letter
   * @returns a boolean whether letter is in word.
   */
  guessWord = (letter: string): boolean => {
    return this.word.includes(letter);
  };

  /**
   *
   * @param letter
   * @returns A string based on the letter guess from user.
   */
  applyGuess = (letter: string): string => {
    let temp;
    if (this.guessWord(letter)) {
      temp = this.dashes.split("");
      this.word.forEach((el, idx) => {
        if (el === letter) {
          return (temp[idx] = el);
        }
      });
      this.dashes = temp.join("");
      return messages[1].goodGuess!;
    } else {
      return messages[2].badGuess!;
    }
  };
}

export { Game };
