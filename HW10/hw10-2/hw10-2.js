// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18,
//     та повідомити про це користувача

let btn = document.getElementById('checkBtn');
btn.onclick = function () {
    let value = document.getElementById("age").value;
    if (value < 18) {
        alert("Sorry, you are not old enough to access this content.");
    } else {
        alert("Access granted!");
    }
}