function* fetchNextElement(){
    console.log("I am inside the generator function");
    const x = 10;
    yield 11;
   yield 12;
    console.log("entering after a yied ");
    const y = x + (yield 30);
    console.log("value of y is",y);
    
}

console.log("Start");
const iter = fetchNextElement();
console.log("called generator");
console.log(iter.next());
console.log(iter.next(15));
console.log(iter.next());
console.log(iter.next(17));
