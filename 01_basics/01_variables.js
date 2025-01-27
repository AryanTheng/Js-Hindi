const accountId = 144553
let acccountEmail = "Aryan@123"
var accountPassword = "123456"
accountCity = "Akola"
let accountState;

// accountId = 2 // not allowed

acccountEmail = "a@gmail.com"
accountPassword = "456"
accountCity = "Pune"
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, acccountEmail, accountPassword, accountCity, accountState]);