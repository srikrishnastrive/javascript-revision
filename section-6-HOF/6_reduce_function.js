const arr = [1,2,3,4,5,6];

function sum(prevResult,currValue){
    console.log(prevResult,currValue);
    return prevResult + currValue;
};

const result = arr.reduce(sum);

console.log(result);