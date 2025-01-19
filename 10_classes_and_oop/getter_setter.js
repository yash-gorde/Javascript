class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email() {
        `${this._email.toUpperCase()}`
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const yash = new User("adsf@gmail.com", "abc")
console.log(yash.password)