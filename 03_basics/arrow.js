const user = {
    username : "John",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome to the website`)
        console.log(this)
    }

    
}

// console.log(user.username)
// console.log(user.price)
// user.welcomeMessage()

// user.username = 'Sam'

// user.welcomeMessage()

//-------------------ARROW FUNCTIONS --------------------


const addTwo = (num1, num2) => (num1 + num2)

const name = () => ({username : "John"})

//console.log(addTwo(3,4))

console.log(name())