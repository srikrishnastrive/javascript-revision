function fun(x){
    let i; //undefined
    if (x % 2 == 0){ 
        i = 0; //not accessible
    }
    else {
        i = 1;
    }
    console.log(i);
}

fun(19);

//good coding

function gun(x){
    if (x % 2 == 0){
        var i = 0;
    }
    else {
        var i = 1;
    }
    console.log(i);
}

gun(10);