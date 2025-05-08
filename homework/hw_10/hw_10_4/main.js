// #2VaLt4vDczH
//
// є сторінка, на якій є блок, в кому знаходиться цифра.
// Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let currentNumber = +localStorage.getItem("number");
currentNumber += 1;

localStorage.setItem("number", currentNumber);

const eventTarget = document.getElementById("target");
eventTarget.innerText = currentNumber;
eventTarget.style.fontSize = "4em";
