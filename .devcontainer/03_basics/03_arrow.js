const user = {
    username: "hitesh",
    price: 999,

    welcomeMessege: function() {
        console.log(`${this.username} , welcome to this website.`);
        console.log(this);   //current context
    }
}

// this:---current context 

// user.welcomeMessege()
// user.username = "sam"
// user.welcomeMessege()

// console.log(this);   //current context  is empty
//browser ke andar kaa lobal object is window object.

// function chai() {
//     let username = "hitesh"
//     console.log(this.username);       //functions me 'this' use nahi ho pa raha h.
// }


//chai()


// const chai = function() {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {               //arrow function
    let username = "hitesh"
    // console.log(this);
}


// chai()

//---------------------------------------------------------------------//

// () => {}  //arrow function syntax

// const addTwo = (num1, num2) => {
//     return num1 + num2                 //Basic Arrow
// }                                        Function.


// const addTwo = (num1, num2) => num1 + num2     //Implicit

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "hitesh"})   //object ko execute krne lke liye () rap karna padega.

console.log(addTwo(3, 4));

// {} me return likhna padega, () me nahi likhna padea.  
