// Control Flow

const a = 9

if ( a % 2 === 0) {

    //console.log("Hello")

}

else {
    //console.log("No")
}


//  "==" vs "==="

// const x = 2 // Number
// const y = "2" // string

// // if (x == y) {
// //     console.log("Code Executed")
// // }

// // Output "Code Executed" "==" does not check the type...

// if (x === y) {
//     console.log("Code Executed")
// }

// else {
//     console.log("NOT EXECUTED!!")
// }
// Output => NOT EXECUTED "===" Checks even the datatype of the variables.

//--------- MULTIPLE CONDITIONS -------------------

// const score = 72

// if (score >= 75) {
//     console.log("A grade")
// }
//  // && AND statement 

// else if (score >= 50 && score < 75) {
//     console.log("B grade")
// }

// else {
//     console.log("S grade")
// }

const loggedInFromGoogle = false
const loggedInFromEmail = true

// OR statement syntax

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("Allow User To Proceed")
}