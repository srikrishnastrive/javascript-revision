"use strict";
var teacher = "sanketh";

function fun(){
    var teacher = "krishna";
    content = "js"; //one scope out auto global with out scope decalatoin
    console.log(teacher);
}

function gun(){
    var student = "sree";
    console.log(student);
}


fun();
gun();
console.log(teacher);
console.log(content);
