// array is a collection of data

// array can be declared using [] or new Array()
let std_1 = ["Sandesh Bhattari", "Kathmandu", 9884787385, "sandesh.bhattari@gmail.com"];
let std = new Array("Sandesh Bhattari", "Kathmandu", 9884787385, "sandesh.bhattari@gmail.com");

/**
 * => Every index is a numeric value which starts from 0
 * => To access an element from an array, use index, put index in []
 * => last_index = size-1 , size(length)
 * => New element will always be pushed at size index
 * => Any datatype can be stored in an array.
 * => Array is of two types:
 * a. Single Dimensional array
 *      -array whose elements/values are non-aray
 * b. Mutli Dimensional Array
 *      -array with at least one array element.
 *   
 */

// access an array element
// console.log(std_1[2]);
// console.log(std[3]);

// single dimensional array
let all_stdn = [
    "",
    353,
    true,
    null
];

// multi dimensional array
let all_std = [
    [],
    5335343,
    false,
    null
];

// 100 variables reduced to one using multi ...
let all_stds = [
    ["Shiva", "India", 959384393, "shiva.surk323@gmail.com"],
    ["Amit", "Kathmandu", 894849448, "amit_nepali.ramroServices@gmail.com"],
    ["std_name", "Address", 8347343483, "email_address"]
];

// accessing element of multi dimensional array
// console.log(all_stds[1][3]);

// array operations/ methods(functions)
// to add new element in an existing array using .push method

let products = []; // null or empty array
console.log(products);
let prod_1 = ["Samsung S1 Pro", 10000, 10, "Samsung"];
products.push(prod_1);
console.log(products);

let prod_2 = ["Iphone 11", 132323, 20, "Apple"];
products.push(prod_2);
console.log(products);

// .length method => length is the size of an array ; size = new element
// length means the no. of array elements
let prod_3 = ["Redmi 9 Prime", 20088, 15, "Xioami"];
let len = products.length;
products[len] = prod_3; // length index
console.log(products);

// replace an old element
prod_1 = ["Intex R3", 7447, 25, "Intex"];
products[0] = prod_1;
console.log(products);

// get last element from an array
let last_elem = products.pop();
console.log(products);

// get first element from an array
let first_elem = products.shift();
console.log(products);

// new entry of an array at the top(first); last ko first lerayerw rakhdinxa
products.unshift(last_elem);
console.log(products);

 // use of 'typeof'
 console.log(typeof(products)); //  returns object




