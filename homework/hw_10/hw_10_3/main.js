// #ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою.
// При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ.
// Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

const formSubmit = document.forms["formSubmit"];

formSubmit.addEventListener("submit", (event) => {
    event.preventDefault();
    const nameForm = formSubmit.name.value;
    const surnameForm = formSubmit.surname.value;
    const ageForm = formSubmit.age.value;
    let obj = {nameForm, surnameForm, ageForm};

    let userData = document.getElementById("userData");
    userData.innerHTML = `${obj.nameForm} ${obj.surnameForm} ${obj.ageForm}`;
});