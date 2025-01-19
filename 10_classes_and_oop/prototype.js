// let myName = "yash            "

// console.log(myName.trueLength)

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "spiderman",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log("hitesh is present in all object")
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`)
}

// heroPower.hitesh()
// myHeros.hitesh()
// heroPower.heyHitesh()


// inheritance


const User = {
    name: "chai",
    email: "name@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiaur    "
String.prototype.trueLength = function() {
    console.log(`${this}`)
    console.log(`True length is : ${this.trim().length}`)
}

anotherUsername.trueLength()
"yash".trueLength()