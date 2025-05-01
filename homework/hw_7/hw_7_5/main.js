function Client(id, name, surname, email, phone, products) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}

function Product(title, price, description) {
    this.title = title;
    this.price = `${price} UAH`;
    this.subscribe = description;
}

let clients = [
    new Client(1, "Olexander", "Shovkovskiy", "sasho@com.ua", "+1111111111",
        [new Product("phone", 70000), new Product("tablet", 25300)]),
    new Client(2, "Andriy", "Yarmolenko", "yarmola@com.ua", "+3698521472558",
        [new Product("desktop", 120000), new Product("tv", 36000), new Product("sale"), new Product("insurance", 1500), new Product("bonus-product")]),
    new Client(3, "Olexander", "Zavarov", "zavarov@com.ua", "+3809632588745",
        [new Product("laptop", 55000), new Product("tablet", 16200)]),
    new Client(4, "Taras", "Myhavko", "taras@com.ua", "+380552313785",
        [new Product("phone", 83600), new Product("playstation", 32800)]),
    new Client(5, "Hrystyna", "Zelinska", "kris@com.ua", "+125463987452",
        [new Product("tv", 325000), new Product("monitor", 21300), new Product("computer", 44444), new Product("bonus-product")]),
    new Client(6, "Marshall", "Meters", "eminem@com.ua", "+14582932584512",
        [new Product("phone", 12000)]),
    new Client(7, "Vitaliy", "Buyalskiy", "vitalya@com.ua", "+380569871235",
        [new Product("playstation", 73569), new Product("tablet", 36200)]),
    new Client(8, "Sergiy", "Rebrov", "rebrov@com.ua", "+380954566547",
        [new Product("phone", 83800, "delivery"), new Product("insurance", 1300)]),
    new Client(9, "Oleh", "Gusev", "gus@com.ua", "+380502587419",
        [new Product("desktop", 54350), new Product("laptop", 31100), new Product("tablet", 23500), new Product("tv", 34600), new Product("sale")]),
    new Client(10, "Georgiy", "Buschan", "zhora@com.ua", "+196325874125",
        [new Product("tablet", 43999), new Product("playstation", 25500), new Product("tv", 65999), new Product("sale")])
];

console.log(clients.sort((a,b)=>a.order.length - b.order.length));