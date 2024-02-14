//-------------------------MAP------------------

const myNums = [1,2,3,4,5,6,7,8,9]

// const newNums = myNums.map(
//     (num) => num + 10
// )

//console.log(newNums)

// -------------------CHAINING------------------
// USING TWO METHODS TOGETHER LIKE MAP AND FILTER.

const newNums = myNums.map(
    (num) => num * 10
).filter(
    (num) => num > 50 // val of num here would be value after line 15
)

console.log(newNums)