let createList = (textItem, numberItem) => {
    document.write(`<ul>`);
    for(let i = 0; i < numberItem; i++){
        document.write(`<li>${textItem}</li>`);
    }
    document.write(`<ul>`);
}

createList("OKTEN is cool!",7);