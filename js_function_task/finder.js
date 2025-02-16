function finder(numbers){
    let find = 0;
    for (const num of numbers){
        if (num === 25){
            find++;
        }
    }
    return find;
}

const result = finder([5,6,11,12,98, 5]);
console.log(result);