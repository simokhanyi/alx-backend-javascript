const cloneSymbol = Symbol();

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;

    // Define the cloneCar method using a symbol
    this[cloneSymbol] = function() {
      return new Car(this._brand, this._motor, this._color);
    };
  }

  // Public method to clone the car
  cloneCar() {
    return this[cloneSymbol]();
  }
}
