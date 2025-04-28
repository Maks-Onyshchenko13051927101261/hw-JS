function arrayMinValue(array) {
    let minValue = array[0];
    for (let arrayElement of array) {
        if(arrayElement < minValue) {
            minValue = arrayElement;
        }
    }
    return minValue;
}

console.log(arrayMinValue([]));