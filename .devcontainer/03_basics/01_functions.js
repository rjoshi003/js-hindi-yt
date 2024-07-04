
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){   //finction ki defination is parameters
//     console.log(number1 + number2);
// }

// function addTwoNumbers(number1, number2) {
//     let result = number1 + number2
//     return result
//     console.log("Hitesh");   //return ke baad koi kaam nhi karega function.
// }

function addTwoNumbers(number1, number2) {
    return number1 + number2
}

const result = addTwoNumbers(3, 5)  //function ko call krte waqt values dete h wo arguments.

// console.log("Result: ", result);


function logInUserMessage(username = "sam"){  //agar empty hoga tab bhi sam aayega
    // if(username === undefined){
        if(!username){   //loop ke andar tabhi jaate h jab true ho
        console.log("Please enter a username");
        return

    } 
    return `${username} just logged in`
}

// console.log(logInUserMessage("hitesh"));
// console.log(logInUserMessage("hitesh"));   //this value will overwrite 'sam'

function calculateCartPrice(...num1){                //rest opretator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));

