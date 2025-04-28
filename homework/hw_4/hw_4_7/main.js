function createList(item, b) {
    document.write("<ul>");
    for(let i = 0; i < b; i++) {
        document.write(`<li>${item}</li>`);
    }
    document.write("</ul>");
}

createList("OKTEN", 5);