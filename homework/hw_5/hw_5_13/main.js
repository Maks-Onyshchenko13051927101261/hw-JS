let exchange = (sumUAH, arr, coin) =>{
    for (let arrEl of arr) {
        if (arrEl["currency"] === coin) {
            return sumUAH / arrEl["value"];
        }
    }
}

console.log(exchange(10000,[{currency:"USD",value:40},{currency:"EUR",value:42}],"USD"));