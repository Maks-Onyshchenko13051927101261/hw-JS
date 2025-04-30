let stringToArray = str => {
    if (str){
       return str.split(" ");
    }
    return "";
}

let str = "Ревуть воли як ясла повні";

console.log(stringToArray(str));;