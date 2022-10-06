function sumArray(arrOfNums) {
    arrOfNums = [1, 2, 3, 4, 5];
    let total = 0;
    for (let i = 0; i < arrOfNums.length; i++) {
        total += arrOfNums[i];
    }
    return total;
}
console.log(sumArray());