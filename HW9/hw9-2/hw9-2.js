// #OPLI89c9G
//
// – Є масив:
//
//     [‘Main’,’Products’,’About us’,’Contacts’]
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let ul = document.querySelector('ul');
// ------------------------or---------------------
// let ul = document.getElementsByTagName('ul')[0];
let arr = ['Main', 'Products', 'About us', 'Contacts'];
for (const el of arr) {
    let li = document.createElement('li');
    li.innerText = el;
    ul.appendChild(li);
}


