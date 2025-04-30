let arr = ["hello world", "lorem ipsum","javascript is cool"];

let upperCase = arr => {
    for (let arrEl of arr) {
        console.log(arrEl.toUpperCase());
    }
}

upperCase(arr);