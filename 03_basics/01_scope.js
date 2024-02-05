d = 100

if (true) {
    let a = 20
    const sum = d + 50 // d is available inside the block because it is a global variable
    console.log(sum)
    const b = 30
    var c = 50
}

// let and const has block level scope. Global variables are available inside the block but block variable are not available outside the block.

// var has global scope.

//console.log(a);
//console.log(b);
//console.log(c);

console.log(sum) // sum is not available because const has a block level scope, it is available only inside the block.

