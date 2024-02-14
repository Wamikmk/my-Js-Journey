// Reduce Mathod

const myNums = [1,2,3,4,5]

const initialValue = 0

const newTotal = myNums.reduce(
    (accumulator, currentvalue) => accumulator + currentvalue, initialValue

)

// first time the accumulator has to be given initial value

console.log(newTotal)