function product(n){
    this.name = n;
}

let d = new product("iphone");
console.log(d);
product.prototype.display = function (){console.log("name of the product",this.name)};
//when we changed the object later still object can access to it.
//in java,c++ there is no linkage between prototypes and objects
//in javascript there will be linkage of objects product.prototype.display
