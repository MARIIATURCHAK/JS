// – створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
//
// створити пустий масив, наповнити його 10 об’єктами Client
function Client(id, name, surname , email, phone, order){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [];
clients.push(new Client(1325, 'Jane', 'Moe', 'doe@gmail.com', '+380932589262', [
    {title: 'tv', price: 13250},
    {title: 'phone', price: 20000}
]));
clients.push(new Client(5468, 'Joi', 'Pot', 'goi@gmail.com', '+380932215452', [
    {title: 'laptop', price: 45800}
]));
clients.push(new Client(9546, 'Fin', 'Rac', 'fin@gmail.com', '+380932581524', [
    {title: 'iron', price: 6520}
]));
clients.push(new Client(6564, 'Lolo', 'Car', 'lolo@gmail.com', '+380932589262', [
    {title: 'phone', price: 15399}
]));
clients.push(new Client(5162, 'Ron', 'Vet', 'ron@gmail.com', '+380931245689', [
    {title: 'tv', price: 15300}
]));
clients.push(new Client(9124, 'Lola', 'Xip', 'lola@gmail.com', '+380928565266', [
    {title: 'iron', price: 999}
]));
clients.push(new Client(4583, 'Ami', 'Qui', 'ami@gmail.com', '+380932512456', [
    {title: 'microwave', price: 10990}
]));
clients.push(new Client(1561, 'Emi', 'Mett', 'emi@gmail.com', '+380675689262', [
    {title: 'microwave', price: 10990},
    {title: 'iron', price: 999}
]));
clients.push(new Client(15154, 'Jane', 'Qween', 'jane@gmail.com', '+380999622528', [
    {title: 'tv', price: 15300}
]));
clients.push(new Client(8547, 'Harry', 'Potter', 'harry@gmail.com', '+380664542528', [
    {title: 'phone', price: 93000}
]));

console.log(clients);



// function Client(id, name, surname , email, phone, ...products){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = products;
// };
// function Product(title, price){
//     this.title = title;
//     this.price = price;
// }
// let clients = [
//     new Client(1325, 'Jane', 'Moes', 'doe@gmail.com', '+380932589262', new Product('tv', 13250), new Product('phone', 20000)),
//     new Client(5468, 'Joi', 'Pot', 'goi@gmail.com', '+380932215452', new Product('laptop', 45800)),
//     new Client(9546, 'Fin', 'Rac', 'fin@gmail.com', '+380932581524', new Product('iron', 6520)),
//     new Client(6564, 'Lolo', 'Car', 'lolo@gmail.com', '+380932589262', new Product('phone', 15399)),
//     new Client(5162, 'Ron', 'Vet', 'ron@gmail.com', '+380931245689', new
//     Product ('tv',15300)),
//     new Client(9124, 'Lola', 'Xip', 'lola@gmail.com', '+380928565266', new Product('iron', 999)),
//     new Client(4583, 'Ami', 'Qui', 'ami@gmail.com', '+380932512456', new Product('microwave', 10990)),
//     new Client(1561, 'Emi', 'Mett', 'emi@gmail.com', '+380675689262', new Product('microwave', 10990), new Product('iron', 999)),
//     new Client(15154, 'Jane', 'Qween', 'jane@gmail.com', '+380999622528', new Product('tv',15300)),
//     new Client(8547, 'Harry', 'Potter', 'harry@gmail.com', '+380664542528', new
//     Product('phone', 93000)),
// ];
// console.log(clients)