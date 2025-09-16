// #kUSgFqWY
//
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.
let table = document.getElementById('table');
let tableGenerationForm = document.forms['tableGenerationForm'];
tableGenerationForm.onsubmit = function(event) {
    table.innerText = '';
    event.preventDefault();
    let linesValue = +tableGenerationForm.lines.value;
    let columnsValue = +tableGenerationForm.columns.value;
    let dateValue = tableGenerationForm.data.value;
    for (let i = 0; i < linesValue; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < columnsValue; j++) {
            const td = document.createElement('td');
            td.innerText = dateValue
            tr.appendChild(td);
        }
    table.appendChild(tr);
    }
}
