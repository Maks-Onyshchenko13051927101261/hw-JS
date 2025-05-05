// #sH8c4er
//
// – Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id=”text”.

const btn = document.getElementById('btn');
btn.onclick = () => {
    document.getElementById('text').style.display = 'none';
}