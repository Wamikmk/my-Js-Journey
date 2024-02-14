// get and set

const user = {
    first : "Elon",
    last : "Musk",

    get full() {
        return this.first + " " + this.last
    },

    set full(f) {
        const parts = f.split(" ")
        this.first = parts[0]
        this.last =  parts[1]

    }
}

//console.log(user.full)

user.full = "Paul Pogba"

//console.log(`first name is ${user.first} and the last name is ${user.last}`)

let xx = {
    a: 5,
    b : "Hello",

    add : function (x,y) {
        return(x + y + this.a)
    }
}

//console.log(xx.add(4,5));

let z = xx.add

//console.log(z.call(xx,6,8)) // xx acts as this

// -----------------APPLY------------------

//console.log(z.apply(xx,[1,2,3,4,5])); // [1,2,3,4,5] spreads and only first two arguments are taken, rest ignored.

//-------------------BIND------------------------

let z2 = z.bind(xx,2) // binds 2 to x

//console.log(z2.call(xx,7))

//---------------- PROTOTYPES--------------------

let myObj = {
    a : 5,
    inc : function () {
        this.a++
    }
}

//console.log(myObj)

//---------------------PROTOTYPES---------------------

const newObj = {
    __proto__ : myObj,
    c : 10
}

// newObj Inherits all the keys, values and methods of x alongside its own keys and values

// console.log(newObj)

// console.log(newObj.a)

// newObj.inc()

// console.log(newObj.a)

class Animal {
    constructor(name) {
        this.name = name
    }

    describe() {
        return `${this.name} makes the sound ${this.sound}!!`
    }



}


let a1 = new Animal("Tiger")

console.log(a1.name)
//console.log(a1.describe())

//----------------------INHERITANCE-----------------

class Dog extends Animal {
    constructor(name) {
        super(name); // calls parent class Animal with name argument.
        this.sound = "Woof";
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
        this.sound = "Meow"
    }
}

let d1 = new Dog("Tommy")

console.log(d1.describe())

let c1 = new Cat("Shakira")
console.log(c1.name)

console.log(c1.describe())