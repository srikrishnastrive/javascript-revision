function product (name,product,description){
    this.name = name;
    this.product =product;
    this.description = description;

    // this.display = function () {
    //     console.log(this);
    // }
    return this;
}

let p =  product("iphone",2000,'the new iphone 12 pro');
console.log(p);