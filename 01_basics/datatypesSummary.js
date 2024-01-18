// JS is a dynamically typed language.

// Two categories: Primitive and Reference

//Primitive: String, Number, boolean, null, undefined, Symbol, BigInt

// Datatype of null is object.

// values in primitive type are not accessed directly through reference, but a copy of the value is accessed.

// Reference type: Array, Functions, Objects

// Values are accessed directly via reference.

const id = Symbol("123")
const anotherId = Symbol("123")

console.log("Wamik")

console.log(id == anotherId)

