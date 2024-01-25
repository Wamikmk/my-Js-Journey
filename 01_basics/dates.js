// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())

//let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDate = new Date("01-23-2023")
//console.log(myCreatedDate.toLocaleString()) // Locale string gives time too

let myTimeStamp = Date.now()
//console.log(myTimeStamp) // Output in milliseconds.

console.log(Math.floor(myTimeStamp/1000))

// Months start from 0 in Js. 0 => January