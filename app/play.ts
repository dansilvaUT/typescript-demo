import { Game } from "./game";
import { messages } from "./messages";
import { Player } from "./player";

class Play {
  game: Game;
  player: Player;
  letterList: NodeList;

  //UI Elements
  startButton: HTMLElement;
  playerName: HTMLParagraphElement;
  inputText: HTMLInputElement;
  hiddenText: HTMLElement;
  feedbackText: HTMLParagraphElement;

  constructor() {
    this.game = new Game();
    this.player = new Player("Current Player");
  }

  startGame = (): void => {
    this.inputText = document.querySelector("input")!;
    this.startButton = document.getElementById("start-btn")!;
    this.playerName = document.querySelector("p")!;
    this.hiddenText = document.getElementById("hiddenLetters")!;
    this.feedbackText = document.querySelector("#feedback")!;
    /**
     * Start game, update player name in instance and in UI.
     */
    this.startButton.addEventListener("click", () => {
      this.disableButton();
      this.setName();
      //Display Dashes, and Letter Buttons
      this.game.setUpGame();
      this.hiddenText.textContent = this.game.dashes;
      this.applyClickHandler();
    });
  };

  gameLogic = (): void => {
    while (this.game.dashes !== this.game.word.join("")) {}
  };

  //Helper Functions
  disableButton = (): void => {
    this.startButton.setAttribute("disabled", "true");
    this.startButton.classList.add("disable");
  };

  setName = (): void => {
    if (this.inputText.value) {
      this.playerName!.textContent = this.inputText.value;
      this.player.playerName = this.inputText.value;
    } else {
      this.playerName.textContent = this.player.playerName;
    }
  };

  applyClickHandler = (): void => {
    this.letterList = document.querySelectorAll(".letter-btn")!;
    this.letterList.forEach((letter: HTMLButtonElement) => {
      return letter.addEventListener("click", (event: Event) => {
        this.feedbackText.textContent = this.getIDAsString(event);
        this.hiddenText.textContent = this.game.dashes;
        this.checkForWin();
      });
    });
  };

  getIDAsString = (event: Event): string => {
    (event.target as HTMLElement).setAttribute("disabled", "true");
    (event.target as HTMLElement).classList.add("disable");
    return this.game.applyGuess((event.target as HTMLElement).id);
  };

  checkForWin = (): boolean => {
    if (this.game.dashes === this.game.word.join("")) {
      this.letterList.forEach((letter: HTMLButtonElement) => {
        if (!letter.classList.contains("disable")) {
          letter.setAttribute("disabled", "true");
          letter.classList.add("disable");
        }
      });
      this.feedbackText.textContent = messages[5].win!;
      return true;
    }
    return false;
  };
}

export { Play };
