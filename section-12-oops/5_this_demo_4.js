//this refers to the class site
let iphone = {
    name:"Iphone 13 pro",
    price: 100000,
    description:"The new apple iphone 13 pro.",
    rating:4.8,
    //display: () => {//returns the empty object
    display: function() {    
        let iphoneRed = {
            name :"Iphone red",
            price:110000,
            print : () =>{
                console.log(this);
            }
        }
        iphoneRed.print();
        //in this context this always refers to the lexical scoping one scope out.
        
    }
    //this always refers to the calling context.
}
iphone.display(); 