import { SetUp } from "./setUp";
import { messages } from "./messages";
class Game {
  startGame: SetUp;
  word: Array<string>;

  constructor() {
    this.startGame = new SetUp();
  }

  setGameWord = (): void => {
    this.word = this.startGame.getWord(this.startGame.words).split("");
  };

  /**
   *
   * @param letter
   * @returns a boolean whether letter is in word.
   */
  guessWord = (letter: string): boolean => {
    return this.word.includes(letter);
  };

  applyGuess = (letter: string) => {
    if (this.guessWord(letter)) {
      return messages[2].badGuess;
    }
  };
}

export { Game };
