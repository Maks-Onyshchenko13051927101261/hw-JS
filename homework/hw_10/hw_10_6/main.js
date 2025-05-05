// створити конвертор ваги з кг в фунти. дані заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const inputConvert = document.getElementById("convert");
const result = document.getElementById("result");

inputConvert.addEventListener("input", function () {
    result.innerText = `${+this.value  * 2.2}`;
});