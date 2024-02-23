//call

const myObject = {
    firstName : "Roger",
    lastName : "Federer",

    displayName : function () {
        console.log(this.firstName + " " + this.lastName) // this refers to te object
    }
}

let reverseName = function (hometown, country) {
    console.log(this.lastName + " " + this.firstName + " from " + hometown + " in " + country)
}


const anotherObject = {
    firstName: 'Rafael',
    lastName : 'Nadal'
}

// function borrwing using call
// How to borrow function displayName of myObject and print Rafael Nadal?

//myObject.displayName.call(anotherObject) // Rafael Nadal

// we are using the displayName of myobject to print first and last name of anotherObject by over writing the this of myObject... 


//reverseName.call(anotherObject, "Mallorca", "Spain")

//reverseName.apply(myObject, ['Rome', 'Italy']) // apply takes the function arguments as a list


// Bind

let playerName = reverseName.bind(anotherObject, 'Mallorca', 'Spain')

// binds reverse function with another object, now this function can be called later...

playerName()