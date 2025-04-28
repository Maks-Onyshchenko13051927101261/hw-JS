let sumArr = (arr) => {
    let sum = 0;
    for (let arrEl of arr) {
        sum += arrEl;
    }
    return sum;
}
console.log(sumArr([]));