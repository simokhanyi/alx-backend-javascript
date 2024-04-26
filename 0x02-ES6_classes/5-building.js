class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new TypeError("Abstract class 'Building' cannot be instantiated directly");
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error("Class extending Building must override evacuationWarningMessage");
  }
}

export default Building;
