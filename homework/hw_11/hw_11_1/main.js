// #HmvAfRQM
// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.

const url = new URL("https://dummyjson.com/carts");
let template = document.getElementById("template");

fetch(url).then(response => response.json()).then(objCarts => {
    const {carts} = objCarts;

    let container = document.createElement("div");
    carts.forEach(cart => {
        const titleId = document.createElement("h2");
        titleId.innerHTML = `id: ${cart.id}`;
        let productsList = document.createElement("div");
        for (const product of cart.products) {
            let productListIt = document.createElement("ul");
            let itemId = document.createElement("li");
            itemId.innerText = `
                                "id": ${product.id}
                                "title": ${product.title}
                                "price": ${product.price}
                                "quantity": ${product.quantity}
                                "total": ${product.total}
                                "discountPercentage": ${product.discountPercentage}
                                "discountedTotal": ${product.discountedTotal}
                               `
            let imgListIt = document.createElement("img");
            imgListIt.src = `${product.thumbnail}`;
            itemId.appendChild(imgListIt);
            productListIt.appendChild(itemId);
            productsList.appendChild(productListIt);
        }
        let description = document.createElement("p");
        description.innerText = `
                                "total":${cart.total},
                                "discountedTotal":${cart.discountedTotal},
                                "userId":${cart.userId},
                                "totalProducts":${cart.totalProducts},
                                "totalQuantity":${cart.totalQuantity}
                                `;

        container.append(titleId, productsList, description);
        template.append(container);
    })
});
