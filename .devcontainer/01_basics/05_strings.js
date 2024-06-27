const name = "Rasika=rj"
const repoCount = 2

//console.log(name + repoCount + "value");  //oudated syntax.

console.log(`Hello my name is ${name} and my repositry count is ${repoCount}.`);   //mordern way and readable.

const gameName = new String('rasika-hc-com')   
/*0:"r"
1:"a"
2:"s"
3:"i"             KEY-VALUE
4:"k"               PAIRS.
5:"a"
6:"h"
7:"c"
length:8*/
//console.log(gameName[0]);   //output-> 'r' value at zeroth position(key)
//console.log(gameName.__proto__);  //tells the prototype.       //PROTOYPE: A biult in property of an object.

//console.log(gameName.length);  //gives the length of the string.
//console.log(gameName.toUpperCase());  //string in capital
//console.log(gameName.charAt(2));  //character at 2nd position
//console.log(gameName.indexOf('k')); //index of the char entere
            //refer mdn docs for more
const newString = gameName.substring(0, 4)
//console.log(newString);  //upto 3rd positon, last dosen't counts(4th in this case).

const anotherString = gameName.slice(-8, 4)  //same as substring, but also accepts negative values.
console.log(anotherString);

const newStringOne = "     Rasika    "
console.log(newStringOne);
console.log(newStringOne.trim());  //removes the extra spaces.


const url ="https://hitesh.com/hitesh%20choudhary"  //%20 for the space.
console.log(url.replace('%20', '-'));  //to replace.

console.log(url.includes('rasika'));  //to ask

console.log(gameName.split('-'));    //to split. syntax-> split(separator) OR split(separator, limit)
