const arr = [1,2,3,4,5,6]

for (const num of arr) {
    //console.log(num)
} 

const greetings = "Hello World"

for (const char of greetings) {

    if (char === " ") {
        continue
    }
    //console.log(char)
}

// ------------------- MAPS -----------------------

// MAP contains unique objects

// MAPS are not iterable. They are not indexed. similar to sets in python.

const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set('FR', 'France')

//console.log(map)

for (const [key, value] of map) {
    //console.log(key, ':', value)
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for (const [key, value] of myObject) {
    //console.log(key, ':', value)
}

// Note: Objects are not iterable directly like maps

