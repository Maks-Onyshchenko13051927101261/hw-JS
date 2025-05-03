// #OPLI89c9G
let arr = ["Main","Products","About us","Contacts"];

let menuList = document.createElement("ul");
for (const item of arr) {
    const liItem = document.createElement("li");
    liItem.innerText = item;
    menuList.appendChild(liItem);
}
document.body.appendChild(menuList);