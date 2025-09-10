// #zg6Fifnqig
//
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
//
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку


// class Cinderella {
//     constructor(name, age, sizeFoot) {
//         this.name = name;
//         this.age = age;
//         this.sizeFoot = sizeFoot;
//     }
// }
// const cinderellas = [
//     new Cinderella('Anna', 25, 36),
//     new Cinderella('Aschenputtel', 19, 35),
//     new Cinderella('Athley', 25, 39),
//     new Cinderella('Amelia', 23, 37),
//     new Cinderella('Emilia', 22, 36),
//     new Cinderella('East', 23, 39),
//     new Cinderella('Sofia', 28, 38),
//     new Cinderella('Mariia', 31, 40),
//     new Cinderella('Olena', 29, 34),
//     new Cinderella('Anna-Mariia', 22, 37),
// ]
// class Prince {
//     constructor(name, age, slipper) {
//         this.name = name;
//         this.age = age;
//         this.slipper = slipper;
//     }
// }
// const prince = new Prince('Charming', 21, 35);
// function findCinderella(cinderellas, prince) {
//     for (const cinderella of cinderellas) {
//         if (cinderella.sizeFoot === prince.slipper) {
//             return cinderella;
//         }
//     }
// }
//
// console.log(findCinderella(cinderellas, prince));


function Girl (name, age, sizeFoot) {
        this.name = name;
        this.age = age;
        this.sizeFoot = sizeFoot;
}
const girls = [
    new Girl('Anna', 25, 36),
    new Girl('Aschenputtel', 19, 35),
    new Girl('Athley', 25, 39),
    new Girl('Amelia', 23, 37),
    new Girl('Emilia', 22, 36),
    new Girl('East', 23, 39),
    new Girl('Sofia', 28, 38),
    new Girl('Mariia', 31, 40),
    new Girl('Olena', 29, 34),
    new Girl('Anna-Mariia', 22, 37),
]
class Prince {
    constructor(name, age, slipper) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;
    }
}
const prince = new Prince('Charming', 21, 35);
function findCinderella(girls, prince) {
    for (const girl of girls) {
        if (girl.sizeFoot === prince.slipper) {
            return girl;
        }
    }
    return null;
}

const cinderella = findCinderella(girls, prince);
console.log(cinderella);