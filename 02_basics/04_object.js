// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullName: {
        userFullName : {
            firstName: "Yash",
            lastName: "Gorde"
        }
    }
}

// console.log(regularUser);

// console.log(regularUser.fullName.userFullName.lastName);


const obj1 = {
    1: "a", 
    2: "b"
}


const obj2 = {
    3: "d", 
    4: "e"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "some1@gmail.com"
    },
    {
        id: 2,
        email: "some2@gmail.com"
    },
    {
        id: 3,
        email: "some3@gmail.com"
    }
]


// console.log(users[0]["id"]);
// console.log(users[0].id);

// console.log(users[1].email);
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Object Destructuring

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course
const {courseInstructor: instructor} = course

console.log(instructor);

// {
//     name: "Yash",
//     courseName: 'js in hindi',
//     price: "free"
// }


[
    {},
    {},
    {},
    {},
]



