const regularUser = new Object()

regularUser.name = "John"
regularUser.email = "Johnny@gmail.com"
regularUser.location = "New York"
regularUser.IsLoggedIn = false

console.log(regularUser);

// Merging two Objects

const obj1 = {1:'a', 2: 'b'}
const obj2 = {3:'c', 4: 'd'}

// Two ways
//  1) assign
//  2) Spread

//const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3)

const obj3 = {...obj1, ...obj2}

console.log(obj3)

