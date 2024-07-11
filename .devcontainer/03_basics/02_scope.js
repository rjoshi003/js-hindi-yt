

//{}:-- scope   //var ki value scope ke bahar aajati hai.
//{} with functions is scope. And without funtion or loop is an object.
//console within scope.


let a = 300
if (true){          //block scope
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}
array = [1, 2, 3, 4,]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
// console.log("ELEMENT: ", element);

}
//global scope.

// console.log(a);
// console.log(b);
// console.log(a);
// console.log(array);

//code enviroment me and browser pe global scopes are diffrent.


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  //scope ke bahar console nahi kar sakte!
    //code line by line execute hota h, that's why two() execute hi nahi hua.
    two()
}
// one()

if (true){
    const username = "hitesh"
    if (username == "hitesh"){
        const website = " youtube"
        // console.log(username +  website);
    }
    // console.log(website);
}
// console.log(username);

//+++++++++++++++++++++++ intresting +++++++++++++++++++++++++

console.log(addone(5));


function addone(num){
    return num + 1
}

addTwo(5)


const addTwo = function(num){
    return num + 2
}

