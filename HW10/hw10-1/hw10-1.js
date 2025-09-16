// – Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.
let div = document.getElementById("text");
div.innerText = "Hello World";
let btn = document.getElementsByTagName('button')[0];
btn.onclick = function () {
    // document.getElementById("text").remove();
    // /
    document.getElementById("text").style.display = "none";
}


