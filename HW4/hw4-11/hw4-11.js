// – створити функцію sum(arr), яка приймає масив чисел,
//     сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let result = 0;
    for (const item of arr) {
        result = result + item;
    }
    return result;
}
console.log(sum([1, 2, 10]))