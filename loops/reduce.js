// Reduce Method

// Use case => Adding Shopping bill

const myNums = [1,2,3,4,5]

//const initialValue = 0

const shoppingCart = [ {
    courseName : "JS",
    price : 299
},

{
    courseName : "PYTHON",
    price : 599
},

{
    courseName : "JAVA",
    price : 999
}

]

const courseTotal = shoppingCart.reduce(
    (acc, item) => acc + item.price, 0
)

// const newTotal = myNums.reduce(
//     (accumulator, currentvalue) => accumulator + currentvalue, initialValue

// )

// first time the accumulator has to be given initial value

//console.log(newTotal)

console.log(courseTotal);