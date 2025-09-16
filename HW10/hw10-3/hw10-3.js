// // #ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом
let form1 = document.forms.form1;
form1.onsubmit = function (ev) {
    ev.preventDefault();
    let nameValue = document.getElementById("name").value;
    let ageValue = document.getElementById("age").value;
    let surnameValue = document.getElementById("surname").value;
    let user = {
        name: nameValue,
        age: ageValue,
        surname: surnameValue,
    };
    let existingDiv = document.getElementById("output");
    if (existingDiv) existingDiv.remove();
    let div = document.createElement('div');
    div.id = "output";
    div.innerText = `Name: ${user.name}, Age: ${user.age}, Surname: ${user.surname}`;
   form1.append(div);
}
