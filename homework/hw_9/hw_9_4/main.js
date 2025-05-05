// #Kx1xgoKy8

let coursesAndDurationArray = [
    {title: "JavaScript Complex", monthDuration: 5},
    {title: "Java Complex", monthDuration: 6},
    {title: "Python Complex", monthDuration: 6},
    {title: "QA Complex", monthDuration: 4},
    {title: "FullStack", monthDuration: 7},
    {title: "Frontend", monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
    const divItem = document.createElement("div");
    divItem.classList.add("item");
    const hHeading = document.createElement("h2");
    hHeading.classList.add("heading");
    hHeading.innerText = course.title;
    const pDescription = document.createElement("p");
    pDescription.classList.add("description");
    pDescription.innerText = course.monthDuration;
    divItem.append(hHeading, pDescription);
    document.body.appendChild(divItem);
}

