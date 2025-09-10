// #gsKLAsNWM
//
// *Через Array.prototype. створити власний foreach, filter
const users1 = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 30},
    {name: 'Charlie', age: 22},
    {name: 'David', age: 18},
    {name: 'Eve', age: 19},
    {name: 'Frank', age: 35},
    {name: 'Grace', age: 27},
    {name: 'Hannah', age: 24},
    {name: 'Ian', age: 31},
    {name: 'Jack', age: 20}
];
const users2 = [
    {name: 'Liam', age: 28, city: 'New York', role: 'admin'},
    {name: 'Mia', age: 21, city: 'Los Angeles', role: 'user'},
    {name: 'Noah', age: 34, city: 'Chicago', role: 'moderator'},
    {name: 'Olivia', age: 19, city: 'Houston', role: 'user'},
    {name: 'Ava', age: 26, city: 'Phoenix', role: 'admin'},
    {name: 'Elijah', age: 32, city: 'Philadelphia', role: 'user'},
    {name: 'Sophia', age: 23, city: 'San Antonio', role: 'moderator'},
    {name: 'James', age: 30, city: 'San Diego', role: 'user'},
    {name: 'Isabella', age: 27, city: 'Dallas', role: 'admin'},
    {name: 'Benjamin', age: 25, city: 'San Jose', role: 'user'}
];
Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

users1.myForEach(function(element) {
    console.log(element.name.toUpperCase());
})
users1.myForEach(function(element, index) {
    element.id = index + 1;
});
console.log(users1);

users1.myForEach(function(element, index) {
    element.status = index % 2 === 0 ? "active" : "passive";
})
users2.myForEach(function(element, index) {
    element.status = index % 2 === 0 ? 'Yes' : 'No';
})
console.log(users2);
users2.myForEach(function(element) {
    console.log(element.name.toUpperCase());
})
Array.prototype.myFilter = function(callback){
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}
console.log(users1.myFilter(value => value.age > 20));
console.log(users1.myFilter(value => value.age < 20));
console.log(users1.myFilter(value => value.name === 'Bob'));
console.log(users1.myFilter(value => value.status === 'active'));
console.log(users2.myFilter(value => value.role === 'admin'));
console.log(users2.myFilter(value => value.age >= 30));