// const myObject = {
//     a : 2,
//     b : 4,

//     c : function display() {
//         console.log(this)
//         console.log(this.a)
//     }
// }

//  const studentOne = {
//     name : "Wamik",
//     displayName : function () {
//         console.log(this)
//         console.log(this.name)
//     }
//  }

//  const studentTwo = {
//     name : "Jare"
//  }

//  studentOne.displayName()

//  studentOne.displayName.call(studentTwo) // how to access function of one object in another object.

 // use call to over write the value of 
 
//  const myObject = {
//     a : 100,
//     x : function () {
//         const y = () => {
//             console.log(this)
//         };
//         y();
//     },
//  }

//  const myObject = {
//     b : 300,

//     c : () => {
//         console.log(this)
//     }
//  }

//  myObject.c()

// const myObject = {
//     a : 100,

//     nestedObject : {
//         c : 300,
//         x : () => {
//             console.log(this)
//         }
//     }
// }

// myObject.nestedObject.x()

var a = 100

console.log(this.a)