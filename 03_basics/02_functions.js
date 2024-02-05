// Rest operator
// When you want to pass unknown number of parameters. For eg items in a shopping cart, you dont know how many items a custoer will add to cart.

// parameter preceeded with "..." dots

function calculateCartPrice(...items) {

    return items

}

//console.log(calculateCartPrice(10,30,50));

// line 6 returns an array containing all the arguments that the function has been called with

// passing objects as parameter in functions.

const user = {
    username : "John",
    price : 499
}

function handleUser(anyobject) {
    console.log(`The username is ${anyobject.username} and the price is ${anyobject.price}.`);
}

handleUser(user)