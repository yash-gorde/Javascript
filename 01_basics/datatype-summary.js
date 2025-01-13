// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('21')
// const anotherId = Symbol('21')
// console.log(id == anotherId);

// const bigNumber = 979139274325017597n


// Reference (Non Primitive)

// Array, Object, Functions


// const heros = ["shaktiman", 'naagraj', 'doga']

// let myObj = {
//     name: "yash",
//     age: 21
// }

// const myFunction = function() {
//     console.log("hello, world");
// }

// console.log(typeof bigNumber);


// ----------------------------------------------------

// Stack (Primitive), Heap (Non-primitive)

// let friendName = "Yash"

// let anotherFriendName = friendName
// anotherFriendName = "Vedant"

// console.log(anotherFriendName);
// console.log(friendName);

let user1 = {
    email : "yashgorde@gmail.com",
    upi : "user@ybl"
}

let user2 = user1

user2.email = "vedantsalunke@gmail.com"

console.log(user1.email);
console.log(user2.email);




