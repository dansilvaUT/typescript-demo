class Player {
    /**
     *
     * @param name
     */
    constructor(name) {
        this.name = name;
    }
    /**
     * Sets the value of the player name
     */
    set playerName(value) {
        this.name = value;
    }
    /**
     * Returns the player name
     */
    get playerName() {
        return this.name;
    }
}
export { Player };
//# sourceMappingURL=player.js.map