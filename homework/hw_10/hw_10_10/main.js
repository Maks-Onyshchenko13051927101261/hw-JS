// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об’єктів та дві кнопки prev next
// при завантаженні сторінки з’являються перші 10 об’єктів.
// При натисканні next виводяться наступні 10 об’єктів
// При натисканні prev виводяться попередні 10 об’єктів

let suits = ["spade", "club", "diamond", "heart", "spider", "clubbed", "blackDiamond"];
let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
const newCards = [];
for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuit: suit, value: value};
        if (suit === "heart" || suit === "diamond") {
            card.color = "red";
        } else {
            card.color = "black";
        }
        newCards.push(card);
    }
}
newCards.push({cardSuit: 'jocker', value: 'jocker', color: 'black'}, {
    cardSuit: 'jocker',
    value: 'jocker',
    color: 'red'
});
let cards = newCards.map((card, index) => ({id: index + 1, ...card}));

let gallery = document.getElementById("collection");
let btnPrev = document.getElementById("prev");
let btnNext = document.getElementById("next");

let currentPage = 0;
function renderList() {
    gallery.innerHTML = "";

    const start = currentPage * 10;
    const end = start + 10;
    const pageInfo = cards.slice(start, end);

    for (const card of pageInfo) {
        let listItem = document.createElement("ul");
        let itemId = document.createElement("li");
        itemId.innerText = `${card.id}`;
        let itemSuit = document.createElement("li");
        itemSuit.innerText = `${card.cardSuit}`;
        let itemValue = document.createElement("li");
        itemValue.innerText = `${card.value} - ${card.color}`;
        listItem.append(itemId, itemSuit, itemValue);
        gallery.appendChild(listItem);
    }
}

btnNext.addEventListener("click", function () {
    if((currentPage+1) *10 < cards.length) {
        renderList(currentPage++);
    }
})

btnPrev.addEventListener("click", function () {
    if(currentPage > 0){
        renderList(currentPage--);
    }
})

renderList();