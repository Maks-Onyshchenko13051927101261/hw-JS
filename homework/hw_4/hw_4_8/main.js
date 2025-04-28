function createList(arr) {
    document.write("<ul>");
    for (let arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write("</ul>");
}

createList([]);