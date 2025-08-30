// – створити функцію swap(arr,index1,index2).
//     Функція міняє місцями значення у відповідних індексах
//
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, n1, n2){
    if (n1 <arr.length && n2 <arr.length){
        let temp = arr[n1];
        arr[n1] = arr[n2];
        arr[n2] = temp;
        return arr;
    }
    return -Infinity;
}
console.log(swap([11, 22, 33,44], 1,1))