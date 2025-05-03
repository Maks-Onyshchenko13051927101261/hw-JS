// #jeBqHV525U5

let coursesAndDurationArray = [
    {title: "JavaScript Complex", monthDuration: 5},
    {title: "Java Complex", monthDuration: 6},
    {title: "Python Complex", monthDuration: 6},
    {title: "QA Complex", monthDuration: 4},
    {title: "FullStack", monthDuration: 7},
    {title: "Frontend", monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
    const divCourse = document.createElement("div");
    // divCourse.innerText = course.title + " " + course.monthDuration;
    divCourse.innerText = `${course.title} ${course.monthDuration}`;

    document.body.appendChild(divCourse);
}