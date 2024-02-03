function sayMyName() {

    console.log("W");
    console.log("A");
    console.log("M");
    console.log("I");
    console.log("K");

}

function sumTwoNums(num1,num2) {

    let result = num1 + num2

    return result
}

// function => keyword
// sayMyName => function Name
// () => arguments
// {} => Scope of the function.

//sayMyName()

const result = sumTwoNums(4,5)

//console.log(result)

function logInUserMessage(username) {

    if( username == undefined) {
        return `Please enter an username`

    }

    return `${username} just logged in`
}

//console.log(logInUserMessage("Wamik"))
console.log(logInUserMessage())






