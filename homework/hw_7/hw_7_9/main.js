// #gsKLAsNWM
// Через Array.prototype. створити власний foreach, filter
let arr = [23, 69, 85, 45, 78, 36];
// Array.prototype - foreach
Array.prototype.myForEach = function () {
    for (const element of this) {
        console.log(element);
    }
}
arr.myForEach();

// Array.prototype - filter, за моєю умовою повертає масив з парними індексами
Array.prototype.myFilter =  function () {
    let arr=[];
    for (const element of this) {
        if (this.indexOf(element) % 2 === 0) {
          arr.push(element);
        }
    }
    console.log(arr);
}
arr.myFilter();