// singleton
// Object.create  // contructor

//obejct literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",    //objects me keys bhi define kr sakte h, but arrays me only indexes se hi access kiya ja sakta h
    "full name": "Hitesh Choudhary", //this cannot be accessed by dot method.
    [mySym]: "myKey1",  //symbol ka syntax is to write it in a []
    age: 18,                             //bhai ye commas bohot imp h.
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);   //dot          //BOTH WAYS VALUES 
// console.log(JsUser["email"]); //brackets      CAN BE ACCESSED.
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "hitesh@chatgpt.com"
console.log(JsUser.email);
// Object.freeze(JsUser) //object freeze will not allow to make changes.
JsUser.email = "hitesh@microsoft.com" //changes are not saved, as the object is already freezed.
console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);   //string interpolation.
}

console.log(JsUser.greeting);  //output-> [Function (anonymous)]
console.log(JsUser.greeting()); //output-> Hello JS user.
console.log(JsUser.greetingTwo());