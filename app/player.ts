class Player {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  set playerName(value: string) {
    this.name = value;
  }

  get playerName(): string {
    return this.name;
  }
}

export { Player };
