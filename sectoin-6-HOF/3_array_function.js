

const number = [9,9,7,6,5];

function print(element,index){
    return `Element at index ${index} is ${element}`;
}

const result = number.map(print);

console.log(result);

function customMapper (arr,func){
    let result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(func(arr[i],i));
    }
    return result;
}

const value = customMapper(number,print);
console.log(value);