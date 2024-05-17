let obj = {};

console.log(10-obj);

let obj1 = {x:9,y:8};

console.log(100-obj1);

let obj2 = {x:9, y:8, 
    toString(){
    return 9;
    },
    valueOf(){
        return "99"
    }
}

console.log(100-obj2);

let obj4 = {x:7,toString(){
    return {}
}
};

// console.log(100 - obj4);
//throw Error
let obj5 = {
    x :5,
    valueOf(){
        return {};
    }

}

console.log(100 - obj5);
