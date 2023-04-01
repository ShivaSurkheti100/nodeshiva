
// this will get opened in Developer console
// console.log("Hello GoatX");

// gets opened in browser.

// document.getElementById('first').innerHTML= "This is from index.html file"
// document.write("I am ShivaSurkheti")

// console.log("use < node index.js > to run js code.");

// single line comments

/*
multi-line comments 
******
*****
****
***
**
*
*/

/*
-variables => data container whose values gets changed
    - keyword used to create variable : let, var 
    - let is local scope/block scoped variable

-constants
    - keyword used : const   
*/

// Overwriting variable
/*let name = "Shiva Surkheti";
name = "GoatX";
name = "ShivaDaGoat"
console.log(name); */

/*let name = "Shiva Surkheti";
console.log(name);

name = "GoatX";
console.log(name);*/

// we can re-declare global scoped variable(var) but not 'let'(differnces#2)
/*var x = 20;
var x = 4;
console.log(x);/*

// same case as with let
/*var x = 20
console.log(x)
var x = 4
console.log(x)*/

// constant variable
const PI = 3.14
// PI = 55 --> data cannot be assigned to constant variable.
// console.log(PI);

// Differences between 'let' and 'var'(difference#1)
let a = 10;
console.log("Value of a is", a);        //     =>  a = 10
{
    //scoping
    let a = 20;
    console.log("Value of a is", a);    //     =>  a = 20
}
console.log("Value of a is", a);        //     =>  a = 10

console.log("");

var b = 10;
console.log("Value of b is", b);         //     =>  a = 10
{
    //scoping
    var b = 20;
    console.log("Value of b is", b);     //     =>  a = 20
}
console.log("Value of b is", b);         //     =>  a = 20

/*
The variables that are defined with 'var' statement have function scope(global scope)
The variables that are defined with 'let' statement have block scope(local scope)
We can declare a variable again even if it has been defined previously in the same scope(var)
We cannot declare a variable more than once if we defined that previously in the same scope(let)
*/


/*JavaScript accepts both double and single quotes:
document.getElementById("demo").innerHTML = "Hello JavaScript";
document.getElementById('demo').innerHTML = 'Hello JavaScript';
*/







