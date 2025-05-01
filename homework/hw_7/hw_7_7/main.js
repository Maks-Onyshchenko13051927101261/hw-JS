class Car {
    constructor (model, manufacturer, year, maxSpeed, motor) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.motor = motor;
    }
    drive () {
        console.log(`we drive at a ${this.maxSpeed} per hour`);
    }
    info () {
        for(let key in this){
            console.log(key, this[key]);
        }
    }
    increaseMaxSpeed (newSpeed){
        if(newSpeed > 0) this.maxSpeed += newSpeed;
    }
    changeYear (newValue) {
        if (newValue > 1900) {
            this.year = newValue;
        } else console.log("invalid value");
    }
    addDriver (driver) {
        if(driver) this.driver = driver;
    }

}
const car = new Car("Jaguar", "UK", 2022, 320, 3.2);
