const accountId = 212121
let accountEmail = "yashgorde@gmail.com"
var accountPassword = "212121"
accountCity = "Pune"
let accountState;

console.log(accountState);

// accountId = 2 // not allowed

accountEmail = "yg@gmail.com"
accountPassword = "213232"
accountCity = "Bengaluru"

// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/