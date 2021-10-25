import { Game } from "./game";
let game = new Game();
console.log(game.word);
game.setGameWords();
console.log(game.word);
game.displayDashes();
console.log(game.applyGuess("d"));
console.log(game.applyGuess("f"));
console.log(game.applyGuess("o"));
console.log(game.applyGuess("s"));
console.log(game.dashes);
//# sourceMappingURL=app.js.map