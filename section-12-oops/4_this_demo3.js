//this refers to the class site
let iphone = {
    name:"Iphone 13 pro",
    price: 100000,
    description:"The new apple iphone 13 pro.",
    rating:4.8,
    display:()=>{
        //inside the arrow function this doesn't refer to the calling context
        console.log(this);
    }
    //this always refers to the calling context.
}

let macbook = {
    name:"Macbook M2",
    price: 125000,
    description:"The new apple macbook m2",
    rating:4.9,
    display(){
        console.log(this);
    }
}

iphone.display(); //calling the display in the context of iphone.

macbook.display();

