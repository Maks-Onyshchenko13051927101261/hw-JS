// #j693ca8

// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

const inputAge = document.getElementById("age");
const btnCheck = document.getElementById("btn");
btnCheck.onclick = () => {
    if(inputAge.value < 18){
        alert("Your age is less than 18");
    } else{
        alert("Your age 18 or more");
    }
}