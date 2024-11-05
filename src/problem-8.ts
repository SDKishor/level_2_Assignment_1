{
  //Design a TypeScript class Car that represents a basic car with properties for brand, model, and year. Implement a method displayInfo that displays information about the car.

  class Car { 
    constructor(public brand: string, public model: string, public year: number) {}
    displayInfo() {
      console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }
  }

  const car = new Car("Tesla", "S", 2012);
  car.displayInfo();
}