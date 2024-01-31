// Objects 

const jsUser = {
    name : "Wamik",
    last_name : 'Khan',
    email : "123@gmail.com",
    location : "India"

}

// when we write name it is internally treated as string.We do not need to explicitly write name as "name"
// Two ways to access the values of the keys inside the object.

// console.log(jsUser['email'])
// console.log(jsUser.location)

// // Changing Values of a key

// jsUser.email = "abc@yahoo.com"

// console.log(jsUser.email)

// Freezing Objects. You don't want the values to change

//Object.freeze(jsUser)

//jsUser.email = "xyz@hotmail.com"
//console.log(jsUser) // The changes won't affect because you have freezed the object.

jsUser.greetings = function() {
    console.log("Hello Js User")
}

jsUser.greetings()

jsUser.greetings2 = function(){
    console.log(`Hello Js User, ${this.name}`)
}

jsUser.greetings2()