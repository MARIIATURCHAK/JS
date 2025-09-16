//
// #Jg0gPO00
//
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут.
//     При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
let inputKg = document.getElementById("input");
let resultDiv = document.getElementById("result");
inputKg.oninput = function () {
    resultDiv.innerText= +this.value * 2.20462;
}

// let inputKg = document.getElementById("input");
// let resultDiv = document.getElementById("result");
// inputKg.addEventListener("input", function(){
//     let kg = Number(inputKg.value);
//     let pounds = kg * 2.20462;
//     resultDiv.innerText = pounds;
// })

