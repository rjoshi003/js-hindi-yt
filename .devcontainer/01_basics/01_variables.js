const accountId = 144553
let accountEmail = "rasika@google.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState;   //output: undefined.

//accountId = 2 //const cannot be changed.

accountEmail = "joshi@google.com"
accountPassword = "1212"
accountCity = "Mumbai"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);