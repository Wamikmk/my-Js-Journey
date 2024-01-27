// Arrays

// Declaring Arrays.

//let myArr = [1,2,3,4,5,6]
// console.log(myArr);
// console.log(typeof(myArr))

// Elements could be could have same or mixed datatype.

//let myStars = new Array("Jordan", "Pippen", "Kobe","Shaq")

// another way to declare an Array

//console.log(myStars)

// Accessing elements of an Array => Array[index].

//console.log(myStars[2])

// Push function is same as append function in python.

//let nums = [1,2,3,4,5,6,7]

//nums.push(10)
//console.log(nums)

//nums.push(11)
//console.log(nums)

//Pop function is used to pop out the ele at the last index.

//nums.pop()
//console.log(nums)

//nums.unshift(10)
//console.log(nums);

// unshift inserts an element at the start or 0th index of an Array.

// nums.shift()
// console.log(nums);

// shift removes the element at the 0th index

//console.log(nums.includes(4)) // returns true or false. -1 if the element is not present.

// let newNums = nums.join()
// console.log(newNums)
// console.log(typeof(newNums))

// Join takes the elemnents of the array and makes them into a string. [1,2,3] => "1,2,3"

// ----------------------IMPORTANT------------------

let myNums = [1,2,3,4,5,6,7,8]
console.log("A", myNums);
console.log(myNums.slice(1,4)) // 4th index excluded
console.log('B', myNums)

console.log(myNums.splice(1,4)) // last index included.

console.log("D", myNums)

// After Splice method the original array is changed/modified. It is without the elements from index 1-4



