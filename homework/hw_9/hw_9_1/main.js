// #8Nmt60ZT
let div = document.createElement("div");
div.classList.add("wrap");
div.classList.add("collapse");
div.classList.add("alpha");
div.classList.add("beta");
div.innerText = "Some text";
document.body.appendChild(div);

let divClone = div.cloneNode(true);
document.body.appendChild(divClone);