// #LhSfdhM3
//
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
// Є сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а малювати в DOM

let sessionList = JSON.parse(localStorage.getItem("sessions")) || [];
sessionList.push(new Date());
localStorage.setItem("sessions", JSON.stringify(sessionList));

let targetSessions = document.getElementById("targetSessions");
let listElement = document.createElement("ul");
for (const sessionEl of sessionList) {
    let itemElement = document.createElement("li");
    itemElement.innerText = sessionEl;
    listElement.appendChild(itemElement);
    targetSessions.appendChild(listElement);
}
