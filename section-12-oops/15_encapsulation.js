/**
 * Encapsulation: The process of wrapping properties and 
 * functions within a single unit is known as encapsulation. 
 */


class Person {
    constructor(name, id){
        this.name = name;
    }

    add_Address(address){
        this.address = address;
    }

    getDetails (){
        console.log(`Name is ${this.name} and address is ${this.address}`);
    }
}

let krishna = new Person("krishna",);
krishna.add_Address("kadiri");
krishna.getDetails();