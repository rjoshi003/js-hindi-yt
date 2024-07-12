//if
const isUserLoggedIn = true
const temperature = 42


// if (temperature === 40 ){     //condition true h toh execute hoga warna nahi hoga.
//     console.log("is 40.");
// } else {
//     console.log("not 40");
// }

// <, >, <=, >=, ==, !=, ===, !==     //comparisons.
//===: equality and type dono check krta h, strict checking.

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);     //var ka scope is global, hence
// }                                         //scope ke bahar bhi execute ho jata h.

// console.log(`user power: ${power}`);

// const balance = 300

// if(balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");

// } else if (balance < 750) {
//     console.log("less yhan 750.");

// } else if(balance < 900) {
//     console.log("less than 900.");

// }  else if(balance < 1200) {
//     console.log("less than 1200.");

// } 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const LoggedInFromEmail = true


if(userLoggedIn && debitCard) {                     //AND
    console.log("Allow to buy courses");
}

if (loggedInFromGoogle || LoggedInFromEmail) {        //OR
    console.log("User logged in");
}