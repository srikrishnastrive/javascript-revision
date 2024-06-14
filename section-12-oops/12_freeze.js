let obj = {
    x :10,
    y :20
};



Object.freeze(obj);

console.log(obj);

obj.z = 15;
obj.x = -1;
console.log(obj);
