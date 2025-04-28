let swap = (arr, indexA, indexB) => {
    if (indexA < arr.length && indexB < arr.length) {
        let temp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;
        return arr;
    }
    return "invalid value";
}
console.log(swap());