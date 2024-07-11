

//{}:-- scope   //var ki value scope ke bahar aajati hai.
//{} with functions is scope. And without funtion or loop is an object.
//console within scope.


let a = 300
if (true){          //block scope
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}
array = [1, 2, 3, 4,]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
console.log("ELEMENT: ", element);

}
//global scope.

// console.log(a);
// console.log(b);
console.log(a);
console.log(array);

//code enviroment me and browser pe global scopes are diffrent.