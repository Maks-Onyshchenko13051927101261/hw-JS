let creatUserCart = (array) => {
    for (let arrayEl of array) {
        document.write(`<ul>
                            <li>${arrayEl.id}</li>
                            <li>${arrayEl.name}</li>
                            <li>${arrayEl.age}</li>
                        </ul>`);
    }
}

creatUserCart([]);