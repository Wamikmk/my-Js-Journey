const myObject ={
    "js" : 'JavaScript',
    "cpp" : "C++",
    "py" : "Python",
    "swift" : "swift by apple"
}

// for in loops for objects

for (const key in myObject) {
    //console.log(key) // gives back keys of the object
}

for (const key in myObject) {
   //console.log(myObject[key]) // gives back value of keys
}

// for in loop for 

const arr = ["Jordan", "Messi", "Lebron", "Kobe"]

for (const name in arr) {
    //console.log(name); // gives back indexes in the array
}

for (const name in arr) {
    //console.log(arr[name]); // gives back the value on the indices. 
}

// for each

const tennis = ["Nadal", "Federer", "Sampras", "Murray", "Aggasi"]

// tennis.forEach( function (ele) {
//     console.log(ele)
// }   ) // call back function has no name

// tennis.forEach( (item) => {
//     console.log(item)
// }   )

function printMe(item, index, arr) {
    //console.log(item, index, arr)
}

//tennis.forEach(printMe)

const myCoding = [
     {
    language : "Javascript",
    extention : "js"
},

{
    language : "Java",
    extention : "java"
},

{
    language : "Python",
    extention : "py"
}
]

myCoding.forEach(  (item) => {

    console.log(item)

}   )

