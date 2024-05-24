var teacher = "sanketh";

function fun(){
    console.log(teacher); //sanketh
    // console.log(content); //throws error --> TOD --< temporal dead zone
    var teacher = "pulkit";
    let content = "js";
    if(content === "js"){
        let hours = "120+";
        console.log(hours); // 120 1st
    }
    console.log(teacher,content); // pulkit teacher // hours are not accessible outside of the block
}

fun();
console.log(teacher);