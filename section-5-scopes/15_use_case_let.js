//which is not needed outside of the block we will proceed with let.

function fun(){
    for (let i = 0; i < 10; i++){
        console.log(i);

    }
    
}

fun();

function process(x,y){
    if (x > y){
        let temp = x;
        x = y;
        y = temp;
    }
    return y - x;
}

console.log(process(5,2));


//re declartion not allowed in let nd allowed in var
// let x = 10;
// let x = 9;

var y =9;
var y =11;