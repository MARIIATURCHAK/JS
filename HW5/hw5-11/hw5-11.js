// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = arr => {
    let result = 0;
    for (const arrElement of arr) {
        result = result + arrElement;

    }
    return result;
}
console.log(sum([1, 2, 10]))

