const startGame = () => {
  let playerName: string | undefined = getInputValue("playername");
  // starting a new game
  logPlayer(playerName);
  postScore(100, playerName);
};

const logPlayer = (name: string = "MultiMath Player"): void => {
  console.log(`New game starting for player ${name}`);
};

const getInputValue = (elementID: string): string | undefined => {
  const inputElement: HTMLInputElement = <HTMLInputElement>(
    document.getElementById(elementID)
  );

  return inputElement.value === "" ? undefined : inputElement.value;
};

const postScore = (
  score: number,
  playerName: string = "MultiMath Player"
): void => {
  const scoreElement: HTMLElement | null =
    document.getElementById("postedScores");
  scoreElement!.innerText = `${score} - ${playerName}`;
};

document.getElementById("startGame")!.addEventListener("click", startGame);
