//the new keyword creates the brand new empty javascript object 

class product {
    // name;
    // price;
    // description;
    /**
     * 
     * @param {*} name 
     * @param {*} price 
     * @param {*} description 
     * obj = {}
     * obj.name = "iphone"
     * obj.price = 120000
     * obj.description = "the new iphone 12 pro"
     */

    constructor(name,price,description){
        //this will be pointing to the new Product -- > empty javascript object
        //in the empty object product  we are creating a new key:value pair 
        this.name = name;
        this.price = price;
        this.description = description;
        //return this menans==== returning constructor by default
        //return "10"; //return primitive will no effect
        //return {};//constructor are for non-primitive objects


    }

    display(){
        console.log(this);

    }
}

//new is the calling context
let p = new product("iphone",2000,'the new iphone 12 pro');
p.display();
//new creates empty product object 
//product()  ---> is calling to the constuctor of the class 
//javascript takes the default constructor
