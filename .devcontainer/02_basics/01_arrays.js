//array

const myArr = [0, 1, 2, 3, 4]  //elements can also be diffrent
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)  //another way of declaring array.
// console.log(myArr[0]);  //accessing of values by entering index into the brckets.
// console.log(myHeros[1]);   //output-> naagraj

// Array methods

// myArr.push(6)  //pushes the entered value at the end of the defined array
// myArr.push(7)
// myArr.pop()  //simply removes the last value of an array.
// myArr.unshift(9)  //adds the value in the begining
// myArr.shift()  //removes the starting value

// console.log(myArr.includes(9)); //to check if the value exits or not
// console.log(myArr.indexOf(4));  //to check the index of a desired value

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

//SLICE OR SPLICE

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)

console.log(myn2);
console.log("C", myArr);