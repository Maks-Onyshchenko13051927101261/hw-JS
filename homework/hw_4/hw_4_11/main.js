function sumArr(arr) {
    let sum = 0;
    for (const arrEl of arr) {
        sum += arrEl;
    }
    return sum;
}
console.log(sumArr([]));