

function sayMyName() {
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("H");
}


// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// } 

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result

    return number1 + number2
} 

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(userName = "sam") {
    // if(userName === undefined) {
    //     console.log("Please enter a username");
    //     return
    // }
    if(!userName) {
        console.log("Please enter a username");
        return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage())


function calculateCartPrice(val1, val2, ...number1) { // rest operator
    return number1
}
// console.log(calculateCartPrice(200, 400, 500));

const user = {
    userName: "Yash",
    price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    userName: "Sam",
    price: 999
})


const myNewArray = [200, 400, 500, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1, 2, 3, 4, 5]));
