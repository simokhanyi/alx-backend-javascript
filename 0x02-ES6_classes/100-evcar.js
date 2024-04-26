import Car from "./10-car.js";

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  display() {
    // Display car details horizontally
    return `${this._brand} ${this._motor} ${this._color} ${this._range}`;
  }

  cloneCar() {
    // Explicitly create and return a new Car object
    return new Car(this._brand, this._motor, this._color);
  }
}
