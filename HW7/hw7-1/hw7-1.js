// – Створити функцію конструктор для об’єктів User з полями
// id, name, surname , email, phone
//
// створити пустий масив, наповнити його 10 об’єктами new User(….)
function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [];
users.push(new User(1325, 'Jane', 'Moe', 'doe@gmail.com', '+380932589262'));
users.push(new User(54, 'Joi', 'Pot', 'goi@gmail.com', '+380932215452'));
users.push(new User(956, 'Fin', 'Rac', 'fin@gmail.com', '+380932581524'));
users.push(new User(6564, 'Lolo', 'Car', 'lolo@gmail.com', '+380932589262'));
users.push(new User(5462, 'Ron', 'Vet', 'ron@gmail.com', '+380931245689'));
users.push(new User(15124, 'Lola', 'Xip', 'lola@gmail.com', '+380928565266'));
users.push(new User(4584823, 'Ami', 'Qui', 'ami@gmail.com', '+380932512456'));
users.push(new User(15612, 'Emi', 'Mett', 'emi@gmail.com', '+380675689262'));
users.push(new User(15154, 'Jane', 'Qween', 'jane@gmail.com', '+380999622528'));
users.push(new User(154854, 'Harry', 'Potter', 'harry@gmail.com', '+380664542528'));
console.log(users);
//
// let users = [
//     new User(1325, 'Jane', 'Moe', 'doe@gmail.com', '+380932589262'),
//     new User(54, 'Joi', 'Pot', 'goi@gmail.com', '+380932215452'),
//     new User(956, 'Fin', 'Rac', 'fin@gmail.com', '+380932581524'),
//     new User(6564, 'Lolo', 'Car', 'lolo@gmail.com', '+380932589262'),
//     new User(5462, 'Ron', 'Vet', 'ron@gmail.com', '+380931245689'),
//     new User(15124, 'Lola', 'Xip', 'lola@gmail.com', '+380928565266'),
//     new User(4584823, 'Ami', 'Qui', 'ami@gmail.com', '+380932512456'),
//     new User(15612, 'Emi', 'Mett', 'emi@gmail.com', '+380675689262'),
//     new User(15154, 'Jane', 'Qween', 'jane@gmail.com', '+380999622528'),
//     new User(154854, 'Harry', 'Potter', 'harry@gmail.com', '+380664542528'),
// ];
// console.log(users);