import { sample } from "lodash";
class SetUp {
    constructor() {
        this.letters = [
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
        this.words = [
            "california",
            "Supercalifragilisticexpialidocious",
            "foxglove",
            "frazzled",
        ];
        /**
         *
         * @param arr
         */
        this.displayLetters = (arr) => {
            let parent = document.getElementById("letters");
            arr.map((letter) => {
                let button = document.createElement("button");
                button.className = "letter-btn";
                button.textContent = letter;
                return parent === null || parent === void 0 ? void 0 : parent.appendChild(button);
            });
        };
        /**
         *
         * @param arr
         * @returns A string, which is the word the user will try to guess.
         */
        this.getWord = (arr) => {
            var _a;
            return (_a = sample(arr)) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        };
        /**
         *
         * @param word
         * @returns A string that is comprised of dashes.
         */
        this.convertToDashes = (word) => {
            return word.map((w) => "-").join("");
        };
    }
}
export { SetUp };
//# sourceMappingURL=setUp.js.map