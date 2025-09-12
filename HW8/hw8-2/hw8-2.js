// #AiN5CoUQ
//
// Створити функцію, яка робить глибоку копію об’єкта.
//
//     Додати перевірки на undefined, null, NaN.
//
//     Подумати та реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.

function deepCloneWithFunctions(object){
    if (object === undefined) return undefined;
    if (object === null) return null;
    if (typeof object === 'number' && isNaN(object)) return NaN;
    if(typeof object === 'object'){
        let functions = [];
        for(let key in object){
            if(typeof(object[key]) === 'function'){
                const functionClone = object[key].bind({});
                functions.push({functionClone, key});
            }
        }
        const copy = JSON.parse(JSON.stringify(object));
        for (const func of functions) {
            copy[func.key] = func.functionClone;
        }
        return copy;
    }
    return object;
}
const clone = deepCloneWithFunctions({id: 2655, name: 'John', numbers: [12, 23, 33], greeting () {console.log('Hi')}, foo(){console.log('Hello')}});
console.log(deepClonWithFunctions(null));
console.log(deepClonWithFunctions());
console.log(deepClonWithFunctions(NaN));
console.log(deepClonWithFunctions(clone));
clone.greeting();
clone.foo();


