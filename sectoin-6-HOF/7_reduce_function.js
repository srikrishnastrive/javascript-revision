/**cart --> [iphone {price :100000,name:"Iphone"},case:{price:500,name:'backCover'},
temporedglass {price:300,name:tempered glass}]
*/

function addPrices(prevResult,currValue){
    console.log(prevResult,currValue);
    let newPrice = prevResult.price + currValue.price;
    return {price:newPrice}
}

cart = [{price :100000,name:"Iphone"},{price:500,name:'backCover'},
 {price:300,name:'tempered glass'}];


const totalPrice = cart.reduce(addPrices);


console.log(totalPrice,totalPrice.price);