// – Взяти масив з  User[] з попереднього завдання,
// та відфільтрувати, залишивши тільки об’єкти з парними id (filter)
function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [];
    users.push(new User(1325, 'Jane', 'Moe', 'doe@gmail.com', '+380932589262'));
    users.push(new User(5468, 'Joi', 'Pot', 'goi@gmail.com', '+380932215452'));
    users.push(new User(9546, 'Fin', 'Rac', 'fin@gmail.com', '+380932581524'));
    users.push(new User(6564, 'Lolo', 'Car', 'lolo@gmail.com', '+380932589262'));
    users.push(new User(5162, 'Ron', 'Vet', 'ron@gmail.com', '+380931245689'));
    users.push(new User(9124, 'Lola', 'Xip', 'lola@gmail.com', '+380928565266'));
    users.push(new User(4583, 'Ami', 'Qui', 'ami@gmail.com', '+380932512456'))
    users.push(new User(1561, 'Emi', 'Mett', 'emi@gmail.com', '+380675689262'));
    users.push(new User(15154, 'Jane', 'Qween', 'jane@gmail.com', '+380999622528'));
    users.push(new User(1547, 'Harry', 'Potter', 'harry@gmail.com', '+380664542528'));

let filterUsers = users.filter(user => user.id % 2 === 0);
console.log(filterUsers);