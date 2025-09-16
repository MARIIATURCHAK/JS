// є сторінка, на якій є блок, в кому знаходиться цифра.
//     Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let counterDiv = document.getElementById("counter");
let count = +localStorage.getItem("pageCounter");
count++;
counterDiv.innerText = count;
localStorage.setItem("pageCounter", count);

