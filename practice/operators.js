
let a = 10;
let b = 3;
// console.log(a/b);
// console.log(a%b);

// pre-assign :: first ma operations ani value assigned hunxa
// console.log(++a);   // print => 11, a => 11
// console.log(a);

// post-assign :: print garne belama matrai 11, kam tw vaisakya hunxa ni tw :: first print operationn then value assignement
// console.log(a++);   // print => 11, a => 12
// console.log(a);

// console.log(--a);   // print => 11, a => 11
// console.log(a);

// console.log(a--);   // print => 11, a => 10
// console.log(a);

// assignment operator =>   =, +=, -=, /=, *=, %=
a += 1;
a++;
++a;
a = a + 1;      // above all does the same work

// string operator / concatenation =>> '+', ','

// let first = "Shiva";
// let last = " Surkheti";
// let name = first + last;
// console.log(name);

let name = "GoatX";
let last = "onDaMic";
// name += last;
name = name + last;
console.log(name);

// comparison operator : ==, ===, !=, !==, <, >  
let x = "10";
let y = 10;
console.log(x == y); // returns true if both the values are true
console.log(x === y); // returns true if both values and data type are same
console.log(x != y); //  false
console.log(x !== y); // true

// Logical Operators :: AND(&&), OR(||), NOT(!)

// ternary operator or conditional operator ==> () ?:, ??

let age; // undefined datatype
// age = (age) ? age : null;
age = age ?? null; 
console.log(age);

let sex = "Male";
sex = (sex) ? sex : null;
console.log(sex);

let z = 5.54434;
// let z;
z = z ?? null;
console.log(z);

// example
let user_gender = "M";
let gender = (user_gender == "M") ? "Male" : "Female";
console.log(gender);





