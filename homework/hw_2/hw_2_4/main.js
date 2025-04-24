let user1 = {name: "Zinaida", username: "Zina", password: "2314556"};
let user2 = {name: "Hrystya", username: "Kris", password: "369745"}
let users = [
    {name: "Vasya", username: "Vasya1", password: "369852"},
    {name: "Oleh", username: "Hello", password: "123456"},
    {name: "Olya", username: "Olyana", password: "654789"},
    user1,
    {name: "Valya", username: "Valentyna", password: "788952214"},
    {name: "Ulyana", username: "Ulya", password: "521346"},
    user2,
    {name: "Alexandr", username: "Alex", password: "1522365"},
    {name: "Dmytro", username: "Dima", password: "7558246"},
    {name: "Anton", username: "Toni", password: "9514753"}
];

console.log(users[0].password);
console.log(users[1]["password"]);
console.log(users[2]["password"]);
console.log(users[3]["password"]);
console.log(users[4]["password"]);
console.log(users[5]["password"]);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8]["password"]);
console.log(users[9].password);
