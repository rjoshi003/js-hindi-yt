let score = undefined

//console.log(typeof score);

let valueInNumber = Number(score);
//console.log(typeof score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber);  

//"33"-> 33
//"33abc"-> NaN (type is still number!)
// true-> 1; false-> 0;
// undefined-> NaN


let isLoggedIN = "Rasika"

let booleanIsLoggedIn = Boolean(isLoggedIN);
//console.log(booleanIsLoggedIn);

//1-> true; 0-> false;
//""-> false
//"Rasika"-> true

let someNumber = 33
let stringSomeNumber = String(someNumber);
//console.log(stringSomeNumber);  //33
//console.log(typeof stringSomeNumber);  //string

//*********************OPERATIONS***************************//

let value = 3
let negValue = -value
//console.log(negValue); //output-> -3 (negative of given value i.e. 3.)

//console.log(2+2);-------->add
//console.log(2-2);-------->sub
//console.log(2*2);-------->multiply
//console.log(2**3);------->power
//console.log(2/3);-------->div
//console.log(2%3);-------->modulo(remainder)


let str1 = "hello"
let str2 = "Rasika"
let str3 = str1 + str2
//console.log(str3);

//console.log("1" + 2);
//console.log(1 + "2");
//console.log("1" + 2 + 2);    //agar string pehle h toh sabhi ko string ki tarah treat kiya jayeg
//console.log(1 + 2 + "2");    //agar string baadme h toh pehle conversions ho jayenge then string execute hoga.

//console.log(+true);
//console.log(+ "");
//prefix and posfix from mdn.
//link to study-> https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion