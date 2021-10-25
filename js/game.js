import { SetUp } from "./setUp";
import { messages } from "./messages";
class Game {
    /**
     * Constructor initializes set up class
     */
    constructor() {
        /**
         * Sets the local word instance variable to an array of letters.
         */
        this.setGameWords = () => {
            this.word = this.startGame.getWord(this.startGame.words).split("");
        };
        /**
         * Renders dashes based on the number of letters in instance word variable
         */
        this.displayDashes = () => {
            this.dashes = this.startGame.convertToDashes(this.word);
        };
        /**
         *
         * @param letter
         * @returns a boolean whether letter is in word.
         */
        this.guessWord = (letter) => {
            return this.word.includes(letter);
        };
        /**
         *
         * @param letter
         * @returns A string based on the letter guess from user.
         */
        this.applyGuess = (letter) => {
            let temp;
            if (this.guessWord(letter)) {
                temp = this.dashes.split("");
                this.word.forEach((el, idx) => {
                    if (el === letter) {
                        return (temp[idx] = el);
                    }
                });
                this.dashes = temp.join("");
                return messages[1].goodGuess;
            }
            else {
                return messages[2].badGuess;
            }
        };
        this.startGame = new SetUp();
    }
}
export { Game };
//# sourceMappingURL=game.js.map