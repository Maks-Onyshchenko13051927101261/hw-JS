class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

let cinderellas = [
    new Cinderella("Valentyna", 32, 40),
    new Cinderella("Helga", 26, 35),
    new Cinderella("Olga", 23, 33),
    new Cinderella("Alina", 36, 36),
    new Cinderella("Alla", 22, 29),
    new Cinderella("Karina", 20, 39),
    new Cinderella("Nataly", 38, 38),
    new Cinderella("Hrystia", 49, 31),
    new Cinderella("Kris", 65, 34),
    new Cinderella("Olia", 16, 33)
];

const  prince = new Prince("Jakob", 23, 39);

const cinderellaPrincess = cinderellas.find(cinderella => cinderella.footSize === prince.shoeSize);
prince.wife = cinderellaPrincess;