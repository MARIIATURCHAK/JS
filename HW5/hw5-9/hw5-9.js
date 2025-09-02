//
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.

let printerArray = (users) => {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}
printerArray([{id:1, name:'John', age: 35,},
    {id:2, name:'Rob', age: 28,},
    {id:3, name:'Max', age: 32,},
    {id:4, name:'Sol', age: 43,}
])




