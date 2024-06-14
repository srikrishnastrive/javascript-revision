class Car {
    // Constructor to initialize the car's properties
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    // Public method to display car details
    displayDetails() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
    }

    // Private method to simulate starting the car
    #startEngine() {
        console.log('Engine started');
    }

    // Public method to start the car
    startCar() {
        this.#startEngine();
        console.log('Car is ready to go');
    }
}

// Create an instance of the Car class
const myCar = new Car('Toyota', 'Corolla', 2020);

// Accessing public method
myCar.displayDetails(); // Output: Brand: Toyota, Model: Corolla, Year: 2020

// Starting the car
myCar.startCar(); // Output: Engine started, Car is ready to go

// Trying to access private method directly (will throw an error)
// myCar.#startEngine(); // Uncaught SyntaxError: Private field '#startEngine' must be declared in an enclosing class
