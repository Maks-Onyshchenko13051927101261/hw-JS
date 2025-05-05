// #2VaLt4vDczH
//
// є сторінка, на якій є блок, в кому знаходиться цифра.
// Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let curentNumber = +localStorage.getItem("number");
curentNumber += 1;

localStorage.setItem("number", curentNumber);

const eventTarget = document.getElementById("target");
eventTarget.innerText = curentNumber;
eventTarget.style.fontSize = "4em";
