let arr = ["hello world", "lorem ipsum","javascript is cool"];

let stringLength = (arr) => {
    for (let arrEl of arr) {
        console.log(arrEl.length);
    }
}

stringLength(arr);