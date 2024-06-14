let obj = {
    x : 10,
    y : 20
}

Object.seal(obj);

console.log(obj);
obj.x = 15;
obj.z = 30;
console.log(obj);
