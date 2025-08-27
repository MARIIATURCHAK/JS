// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let number1 = +prompt('Enter number');
let number2 = +prompt('Enter number');

if (number1 > number2) {
    console.log(number1);
}else if (number2 > number1) {
    console.log( number2);
} else if(number1 === number2) {
    console.log('===');
}

