// can use named or default imp/exp::: preferred one is named
// importing in es5 standard(named import)>>
// const ucFirst = require("./es1");

// importing in es6 standard(named import)
// import {ucFirst} from "./es1";

// es6 default import
// import ucFirst from "./es1";

// all import ... here we are importing object data i.e {ucFirst, getSizeOfArray}
// import * as functions from "./es1";
// let result = functions.ucFirst("test value");

// es5 & es6
// features in es6
// a. Object Destructuring
let user = {
    name: "Shiva", 
    email: "shiva@gmail.com",
    address: "Dhading",
    phone: 54343434,
    org: "Broadway Infosys Nepal",
    position: "Web Developer"
}

// let name = user.name;
// let email = user.email;
// let address = user.address;

// we can write below code instead of above three lines of code
// let {name, email, address} = user;  // object lai destructure garerw key lai varaible ko ruup ma use gareko

// b. Object Shorthand(OBJECT OF OBJECT)
let user_1 = {
    user: {
        name: "Shiva", 
        email: "shiva@gmail.com",
        address: "Dhading",
        phone: 54343434,
        org: "Broadway Infosys Nepal",
        position: "Web Developer" 
    }
}

// can use this instead of above
let user_2 = {
    user
}

// c. Spread and Rest Operator

let all_props = {
    ...user,                // spread operator
    experience:15
}

let{name, email, address, ...other} = user;     // ...other is Rest operator

// d. Class based OOP (es5 ma prototype based oop) :: introduced form es6 standard
class User{
    
}

// e. Arrow notation( introduced from es6 standard)
const getUser = () => {

}

// f. TypeScript(Version of JavaScript)

// g. Template literals :: interpolate or populate or fill same ho
let user_name = "Shiva Surkheti";
let mail_body = `Dear ${user_name}, Thank you for your account activation.`
console.log(mail_body);

// can use these features in es5 too 

// h. Import export

let result = ucFirst("test value");
console.log(result);














