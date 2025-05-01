function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User("1", "Volodymyr", "Dantes", "dantes@com.ua","+380585222546"),
    new User("2", "Olexiy","Durnev", "durnev@com.ua", "+152368741558"),
    new User("3", "Vlad", "Kuran", "kuran@mail.com", "+1987654322"),
    new User("4","Volodymyr", "Brazhko", "brazhko@com.ua", "+30504567892"),
    new User("5", "Vlad", "Vanat", "vanat@com.ua", "+39875225897"),
    new User("6", "Andriy", "Yarmolenko", "yarmolenko@com.ua","+14785693258"),
    new User("7", "Olexiy","Buryak", "buryak@com.ua", "+3098522546983"),
    new User("8", "Vitaliy", "Buyalskiy", "buyalskyy@mail.com", "+380957896543"),
    new User("9","Oleh", "Gusev", "gusev@com.ua", "+38068523636412"),
    new User("10", "Olexander", "Shovkovskiy", "shovkovskiy@com.ua", "+1111111111111")
];

console.log(users);