// – створити функцію, яка приймає масив та виводить кожен його елемент
//
// let printArray = arr => {
//     for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }};
// printArray([11, 25.5, 22, true]);


let printArray = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);

    }
};
printArray([11, 25.5, 22, true, 'hello']);