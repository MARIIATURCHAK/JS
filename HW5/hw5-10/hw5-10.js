// – створити функцію, яка повертає найменше число з масиву

let arrayMinValue = numbers => {
    let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    const number = numbers[i];
    if (number < min) {
        min = number;
    }
}
return min;
}
console.log(arrayMinValue([10,15, -5, 10]))



