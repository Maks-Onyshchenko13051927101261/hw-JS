let listOfItems = ["html", "css", "javascript", "mysql", "mongodb", "react", "angular", "node.js"];
document.write(`<ul>`)
for(let Item of listOfItems) {
    document.write(`<li>${Item}</li>`);
}
document.write(`</ul>`)