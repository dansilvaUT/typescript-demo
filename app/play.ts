import { Game } from "./game";
import { Player } from "./player";

class Play {
  game: Game;
  player: Player;

  //UI Elements
  startButton: HTMLElement;
  playerName: HTMLParagraphElement;
  inputText: HTMLInputElement;
  hiddenText: HTMLElement;

  constructor() {
    this.game = new Game();
    this.player = new Player();
  }

  startGame = (): void => {
    this.inputText = document.querySelector("input")!;
    this.startButton = document.getElementById("start-btn")!;
    this.playerName = document.querySelector("p")!;
    this.hiddenText = document.getElementById("hiddenLetters")!;
    /**
     * Start game, update player name in instance and in UI.
     */
    this.startButton.addEventListener("click", () => {
      this.playerName!.textContent = this.inputText.value;
      this.player.playerName = this.inputText.value;

      //Display Dashes, and Letter Buttons
      this.game.setUpGame();
      this.hiddenText.textContent = this.game.dashes;
    });
  };

  gameLogic = (): void => {
    while (this.game.dashes !== this.game.word.join("")) {}
  };
}

export { Play };
