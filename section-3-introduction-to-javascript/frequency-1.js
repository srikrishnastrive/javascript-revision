


function frequency_string(str){
    let freq = {};
    for (const  char of  str){
        if(freq[char]){
            freq[char] += 1;
        }
        else {
            freq[char ]= 1;
        }
    }
    return freq;

}

console.log(frequency_string("javascript"));