import { Game } from "./game";

let game = new Game();

console.log(game.word);

game.setGameWord();
console.log(game.word);
game.applyGuess("d");
