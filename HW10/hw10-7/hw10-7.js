// #RbQGnH5DuC
//
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
//
// сигнатура функції –
//
// addToLocalStorage(arrayName:string,objToAdd:any{}):void
function addToLocalStorage(arrayName, objToAdd) {
    let arr = JSON.parse(localStorage.getItem(arrayName) || '[]');

    if (!objToAdd || typeof objToAdd !== "object") {
        throw new Error("objToAdd must be a valid object");
    }

    arr.push(objToAdd);
    localStorage.setItem(arrayName, JSON.stringify(arr));
}
addToLocalStorage("users", {name: "Bob", age: 30});
addToLocalStorage("users", {name: "Rob", age: 20});
addToLocalStorage("users", {name: "Emily", age: 32});


