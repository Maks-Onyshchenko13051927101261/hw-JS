// #RbQGnH5DuC
// В localStorage зберігаються масиви.
// Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
// сигнатура функції – addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName, objToAdd) {
    let arrayObj = localStorage.getItem(arrayName);
    if (!arrayObj) {
        throw new Error(`Array ${arrayName} not found!`);
    }
    const parseArr = JSON.parse(arrayObj);
    if (typeof objToAdd === "object") {
        parseArr.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(parseArr));
}
addToLocalStorage();