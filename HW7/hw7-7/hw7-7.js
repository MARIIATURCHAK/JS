// #5kla3yMpgp
//
// – (Те саме, тільки через клас)
//
// Створити клас, який дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт, який “водій” з довільним набором полів, і додає його в поточний об’єкт car

class Car {
    constructor(model, producer, maxSpeed, year, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.maxSpeed = maxSpeed;
        this.year = year;
        this.engineCapacity = engineCapacity;
        this.drive = function () {
            console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
        }
        this.info = function () {
            for (const key in this) {
                console.log(`${key} – ${this[key]}`)
            }
        }
        this.increaseMaxSpeed = function (speedToIncrease) {
            if (maxSpeed > 0) {
                this.maxSpeed = this.maxSpeed + speedToIncrease;
            }
        }
        this.changeYear = function (newYear) {
            if (newYear > 1858) {
                this.year = newYear;
            }
        }
        this.addDriver = function (driver) {
            this.driver = driver
        }
    }}



let car = new Car('focus', 'ford', 260, 1858, 1.9);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(100);
car.changeYear(1880);
car.addDriver('Okten');
console.log(car)

