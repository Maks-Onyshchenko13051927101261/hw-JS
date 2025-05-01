function Car(model, manufacturer, year, maxSpeed, motor) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.motor = motor;

    this.drive = function () {
        console.log(`we drive at a ${this.maxSpeed} per hour`);
    }
    this.info = function () {
        for(let key in this){
            console.log(`${key}: ${this[key]}`);
        }
    }
    this.increaseMaxSpeed = function (newSpeed){
        if(newSpeed > 0) this.maxSpeed += newSpeed;
    }
    this.changeYear = function (newValue) {
        if (newValue > 1900) {
            this.year = newValue;
        } else console.log("invalid value");
    }
    this.addDriver = function (driver) {
        if(driver) this.driver = driver;
    }
}
const car = new Car("mazda", "Japan", 2015, 240, 2.5);
console.log(car);




