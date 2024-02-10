//const userEmail = "Wamik@gmail.com"

const userEmail = ""

if (userEmail) {
    console.log("Got user Email");
} else{
    console.log("User does not have an email")
}

// falsy values => false, null, "", undefined, 0, BinInt On...
// truty values => [], {}, " ", "0", function () {}

// Note: " " string with a space is truthy

const userArray = []

if (userArray.length === 0) {
    console.log("Array is empty")
} else {
    console.log("Array is not empty")
}

const emptyObj = {}

const keys = Object.keys(emptyObj)
console.log(keys)

if (Object.keys(emptyObj).length === 0) {
    console.log('Empty Object')
}


// ------------- Nullish Coalescing operator------------

let val1;
val1 = null ?? 15

console.log(val1)

