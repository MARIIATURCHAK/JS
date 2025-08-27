// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
//     до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +prompt('Enter time');
if (time >= 0 && time <= 15) {
    console.log(' first quarter');
} else if (time > 15 && time <= 30) {
    console.log('second quarter');
} else if (time > 30 && time <= 45) {
    console.log(' third quarter');
} else if (time > 45 && time <= 60) {
    console.log('fourth quarter');
} else {
    console.log('Wrong data!!!');
}