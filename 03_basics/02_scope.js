function one() {

    const username = "John"

    function two() {
        const website = "Youtube"
        //console.log(`${username} logged on ${website}`)
    }

    //two()

    //console.log(`${username} logged out of ${website}`)
}

//one()

if (true) {

    const username = "John"

    if (username === "John") {

        const website = " YouTube"
        //console.log(username + website)
    }

    //console.log(website)
}

//console.log(username)


// ---------------------Hoisting ----------------------

addOne(9)
function addOne(num) {
    return num + 1
}


addTwo(7)

const addTwo = function(num) {
    return num + 2
}

addTwo(7)