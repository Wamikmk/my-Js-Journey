// ------------ For loops ----------------------

for (let i = 0; i < 10 ; i ++) {
    const element = i
    if (element == 5) {
        //console.log("5 is the best number")
    }
    //console.log(element)

}

// -------------------- NESTED LOOP ------------------------

for (let i =1; i <= 10; i ++) {
    //console.log(`Outer loop ${i}`)
    for (let j = 1; j <= 10; j++) {
        //console.log(`${i} * ${j} = ${i*j}`)
    }
}

let myArray = ["Khabib", "Benzema", "Kaka"]

for (let i = 0; i < myArray.length ; i ++) {
    let element = myArray[i]
    //console.log(element)

}

// If i goes out of bounds, JS doesn't raise exception. It prints undefined.

// ------------- break and continue --------------

for (let i = 1; i <= 10; i ++ ) {
    if (i == 7) {
        //console.log(i)
        break
    }
    //console.log(i)
}

for (let i = 1; i <= 10; i ++ ) {
    if (i == 7) {
        continue
    }
    console.log(i)
}