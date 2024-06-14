//it is also encapsulation 
/**
 * Encapsulation helps to promote good software design by promoting the principles 
 * of information hiding, abstraction, and modularity.
 */
class Product{
    #name; // private whenever we have a private prop. not visible outside
    #price;
    description;

    constructor(name,price,description){
        this.#name = name;
        this.#price = price;
        this.description = description;
    }

    //TO SET P.NAME or change the product we are providing GETTERS AND SETTERS
    //SETTERS
    set setName(name){
        
        if (typeof(name) !== 'string') {
            console.log("Invalid name passs")
            return;
        }
        this.#name = name;
    }

    set setPrice(price){
        if (typeof(price) !== 'number' && price < 0){
            console.log("Invalid price");
        }
        this.#price = price;
    }

    //GETTERS
    get getPrice(){
        console.log(this.#price);
        return;
    }

    get getName(){
        console.log(this.#name);
        return;
    }

    display(){
        console.log(this.#name,this.#price,this.description);
    }
}

const p = new Product("bag",1000,"5 liters",);
//p.name = -1;
//it is assigning new name
p.setName="iphone";
p.setPrice = 1000000;
p.getName;
p.getPrice;
console.log(p);
p.display();