class Shape {
    constructor(name){
        this.name = name;
    }
    /**
     * 
     * Method overriding occurs when a subclass provides a specific implementation 
     * of a method that is already defined in its superclass.
     *  This allows the subclass to modify or extend the behavior of the method
     */

   // method to be overriden like method overriding
    getArea(){
        throw new Error('get Area method must be implented');
    }

    describe(){
        return `This is ${this.name}`;
    }
}

//subclass
class Circle extends Shape {
    constructor(radius){
        super('Circle');
        this.radius = radius;
    }

    //overriding the getArea method
    getArea (){
        return Math.PI * Math.pow(this.radius,2);
    }

}

let c1 = new Circle(5);
console.log(c1.getArea());