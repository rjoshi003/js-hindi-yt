//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);  //object

// let myCreatedDate = new Date(2024, 0, 24)   //months start from 0
// let myCreatedDate = new Date(2024, 0, 24, 5, 3)
let myCreatedDate = new Date("2024-01-24") //(YY/MM/DD)  //months starts from 1
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()  //Ex:polls, quizzes

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());  //gives value in milisec which makes comparisons easier. to compare date.
console.log(Date.now());
console.log(Date.now()/1000); //to convert onto seconds. gives decimal values

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());  //to get month
console.log(newDate.getDay());  //to get day

newDate.toLocaleString('default' {
    weekday: 'long'
})