// let a = 2
// let b = 2

// console.log(a>b) //greater than
// console.log(a==b) // Equality
// console.log(a<b) // Less than
// console.log(a>=b) // greater or equal to
// console.log(a<=b) // less or equal to


// Important
// Comapring objects which are not of same data type

// console.log("2" == 2) // true
// console.log("2" > 2) // false
// console.log("2" < 2) // false

// JS converts "2" into a number first and then compares.

// console.log(null > 0) // false
// console.log(null == 0) // false
// console.log(null < 0) // false
// console.log(null >= 0) // true

// Comparison operators (>,<,>=,<=) converts null into 0 and then compares.

// Equality operator (==) does not do so

// === // strict check // checks even datatypes before comparing

x = "3"
y = 3

console.log(x==y) //true
console.log(x===y) // false // because strict check compares even datatypes