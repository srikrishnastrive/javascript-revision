let products = {
    arr : [
        {
            name:"Macbook M2",
            price: 125000,
            description:"The new apple macbook m2",
            rating:4.9,
            //getCategory:function print(){console.log(this.category);}
            //making an arrow function
            getCategory : () => {
                console.log(this.category);
            }
        },
        {
            name:"Iphone 13 pro",
            price: 100000,
            description:"The new apple iphone 13 pro.",
            rating:4.8,
            //getCategory:function print(){console.log(this.category);}
            //making an arrow function
            getCategory : () => {
                console.log(this.category);
            }

        }
    ],
    category :"Electronics",
    getProducts: function (){
        return this.arr;
    }

}

products.getProducts()[0].getCategory();
