class Player {
  name: string;

  /**
   *
   * @param name
   */
  constructor(name: string = "") {
    this.name = name;
  }

  /**
   * Sets the value of the player name
   */
  set playerName(value: string) {
    this.name = value;
  }

  /**
   * Returns the player name
   */
  get playerName(): string {
    return this.name;
  }
}

export { Player };
