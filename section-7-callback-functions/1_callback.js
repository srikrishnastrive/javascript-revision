

function fun(x,fn){
    console.log(`value of ${x}`);
    fn();
}

fun(9,function gun(){
    console.log("this is callback method")
})