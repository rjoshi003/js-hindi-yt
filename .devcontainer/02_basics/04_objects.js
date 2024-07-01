//simgleton or constructor
//object()-----singleton, &object{}-----non singleton

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggenIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@mail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname?.userfullname.firstname);    //optional chaining.

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {3: "a", 4: "b"}


// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)  //return karta h isliye store kiya

const obj3 = {...obj1, ...obj2}  //spread operator
// console.log(obj3);     //output me object ke andar object aa ajata h, same araays jaisa.

const users = {
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
}


