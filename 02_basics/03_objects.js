// singleton
// Object.create



// object literals


const mySym = Symbol("key1")

const JsUser = {
    name : "Yash",
    "full name": "Yash Rajendra Gorde",
    [mySym]: "myKey1",
    age: 21,
    location: "Pune",
    email: "yashgorde@google.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "vedantsalunke@google.com"
// Object.freeze(JsUser)
// JsUser.email = "vedantsalunke@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function() {
    console.log("hello, JS user");
}

// console.log(JsUser.greeting);

JsUser.greeting2 = function() {
    console.log(`hello, JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());