// ***PAGINATION
//
// зробити масив на 100 об’єктів та дві кнопки prev next
//
// при завантаженні сторінки з’являються перші 10 об’єктів.
//
//     При натисканні next виводяться наступні 10 об’єктів
//
// При натисканні prev виводяться попередні 10 об’єктів
let items = [];
for (let i = 1; i <= 100; i++) {
    items.push({ id: i, name: `Item ${i}` });

}
let prevBtn = document.getElementById("prev");
let outputDiv = document.getElementById("output");
let nextBtn = document.getElementById("next");
let currentPage = 1;
let totalPages = (items.length - (items.length % 10)) / 10;
if (items.length % 10 > 0) {
    totalPages = totalPages + 1;
}
function renderPage(){
    startIndex = (currentPage - 1) * 10;
    endIndex = currentPage * 10;
    outputDiv.innerHTML = '';
    for (let i = startIndex; i < endIndex && i < items.length; i++)  {
        let div = document.createElement("div");
        div.innerText = items[i].id + ". " + items[i].name;
        outputDiv.appendChild(div);
    }
}
nextBtn.onclick = function() {
    if (currentPage < totalPages) {
        currentPage++;
        renderPage();
    }
};
prevBtn.onclick = function() {
    if (currentPage > 1) {
        currentPage--;
        renderPage();
    }
};
renderPage();

