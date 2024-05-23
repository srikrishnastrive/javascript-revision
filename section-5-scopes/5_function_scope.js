if(false){
    var x = 10;
}

console.log(x);

function fun(){
    var y = 10; //not accessible outsied

    
}

function gun(){
    console.log(y);
    let  y = 10;
}

gun();

function gun1(){
    console.log(y);
    var y = 11;

}

gun1();