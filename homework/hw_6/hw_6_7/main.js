function sortNums(numsArr, directions) {
    if(directions === "ascending"){return numsArr.sort((a,b) => a - b);}
    if(directions === "descending"){return numsArr.sort((a,b) => b- a);}
}
let nums = [11, 21, 3];

console.log(sortNums(nums, "ascending"));
console.log(sortNums(nums, "descending"));