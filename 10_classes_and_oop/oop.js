const user = {
    username: 'yash',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`username : ${this.username}`)
        console.log(this)
    }
}
// console.log(user.getUserDetails())
// console.log(this)

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    return this
}

const userOne = new User('yash', 21, true)
const userTwo = new User('chaiaurcode', 11, false)
console.log(userOne.constructor)
// console.log(userOne)

