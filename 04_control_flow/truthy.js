// const userEmail = "yashgorde@gmail.com" // true
// const userEmail = "" // false
const userEmail = [] // true

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// true, "0", "false", " ", [], {}, function(){} // empty function


// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log(`Object is empty`);
// }

// Nullish coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
// console.log(val1);

// Terniary Operator

// conditionn ? true : false

const iceTeaPrice = 100
iceTeaPrice < 80 ? console.log("less than 80") : console.log("more than 80");

