class Category {
    constructor(c){
        this.category = c;
    }
}


class Product extends Category{
    constructor(n,c){
        super(c);
        this.name = n;
    }
}

let p = new Product("iphone","mobiles");

console.log(p);