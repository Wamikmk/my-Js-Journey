const accountId = 144556
let accountEmail = "wammy@google.com"
var accountPassword = "12345"
accountCity = "Srinagar"

let accountState;

// accountId = 2 // not allowed
/*
var does not respect scope while let does. Avoid using var
*/

accountEmail = "wmk@gmail.com"
accountPassword = "786001"
accountCity = "Makkah"

console.table([accountEmail,accountPassword,accountCity, accountState])

console.log(accountId);