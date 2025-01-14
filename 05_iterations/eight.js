const myNumbers = [1, 2, 3]

// const myTotal = myNumbers.reduce( function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)

const myTotal = myNumbers.reduce( (acc, currval) => acc + currval, 0)

// console.log(myTotal)

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 2999
    },
    {
        itemName: "Python",
        price: 999
    },
    {
        itemName: "Mobile dev course",
        price: 9999
    },
    {
        itemName: "Data Analytics",
        price: 12999
    },
]


const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
 
console.log(totalPrice)

