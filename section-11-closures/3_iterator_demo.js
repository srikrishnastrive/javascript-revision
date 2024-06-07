function fetchNextElement(array){
    let idx = 0;
    function next(){
        if(idx == array.length){
            return undefined
        }
        const nextElement = array[idx];
        idx++;
        return nextElement;
    }
    return {next};
}

const automaticFetcher = fetchNextElement([99,90,1,2,3,4,5,5]);

console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());