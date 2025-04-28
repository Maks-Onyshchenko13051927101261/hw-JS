let createList = (array) => {
    document.write(`<ul>`);
    for (let itemEl of array) {
        document.write(`<li>${itemEl}</li>`);
    }
    document.write(`</ul>`);
}

createList([]);