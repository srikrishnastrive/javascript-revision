const player1 = {
    firstName : "mahendra singh",
    lastName  : "Dhoni",
    numberToBat : 2,
    canBowl : false,
    getDetails  : function () {
        console.log(this.firstName,this.lastName,"comes at No.",this.numberToBat);
    }

}

const obj = function (x,y){
    console.log(x + y);
    console.log(this.getDetails());
}

//player 1 and obj are differnet objects
//if we call obj it throws error global scope this is empty 

let x = obj.bind(player1,1,2);
//bind create a new function and attach two functions

x();

obj.call(player1,1,2);
