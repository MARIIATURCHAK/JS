// #bq1zkx7WP
//
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається

let priceDiv = document.getElementById("price");
let storedPrice = localStorage.getItem("price");
let currentPrice;
if (storedPrice) {
    currentPrice = Number(storedPrice);
} else {
    currentPrice = 100;
}
let lastUpdated = localStorage.getItem("lastUpdated");
if (lastUpdated) {
    lastUpdated = Number(lastUpdated);
} else {
    lastUpdated = 0;
}
let time = Date.now();
if (time - lastUpdated >= 10000) {
    currentPrice +=10;
    localStorage.setItem("lastUpdated", time);
}
localStorage.setItem("price", currentPrice);
priceDiv.innerHTML = currentPrice + " UAH";
