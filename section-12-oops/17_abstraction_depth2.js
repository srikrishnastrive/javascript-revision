/**
 * An abstract class is a class that is not intended to be instantiated directly. 
 * It is designed to serve as a base class for other classes. 
 * The abstract class typically includes abstract methods that must be implemented by any subclass. 
 * In JavaScript, there is no built-in support for abstract classes, 
 * but we can simulate this behavior using some techniques.
 */

class Shape {
    constructor(name) {
       if(this.constructor == Shape) {
          throw new Error("Class is of abstract type and can't be instantiated");
       };
 
       if(this.getArea == undefined) {
           throw new Error("getArea method must be implemented");
       };
       this.name = name;
    }
 
 }
 
 class Rectangle extends Shape {
 
    constructor(name, length, width){
      super(name);
      this.length = length;
      this.width = width;
    }

     // Implementing the getArea method
     getArea() {
        return this.length * this.width;
    }
 
 } 
 
 //const myShape = new Shape('My shape'); // This will throw an Error
 const smallRectangle = new Rectangle("Small Rectangle", 3, 5) // This will throw an error.
 console.log(smallRectangle.getArea()); // Output: 15