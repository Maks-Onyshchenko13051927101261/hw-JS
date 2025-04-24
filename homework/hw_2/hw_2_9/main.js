let day = +prompt("enter day number of week")
let monday = [5,10];
let tuesday = [3,4];
let wednesday = [6,12];
let thursday = [7,8];
let friday = [9,11];
let saturday = "weekend";
let sunday = "holiday";
switch (day) {
    case 1:
        console.log("Monday: ", monday);
        break;
    case 2:
        console.log("Tuesday: ", tuesday);
        break;
    case 3:
        console.log("Wednesday: ", wednesday);
        break;
    case 4:
        console.log("Thursday: ", thursday);
        break;
    case 5:
        console.log("Friday: ", friday);
        break;
    case 6:
        console.log("Saturday: ", saturday);
        break;
    case 7:
        console.log("Sunday: ", sunday);
        break;
    default:
        console.log("Invalid input");
        break;
}