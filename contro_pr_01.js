/**
 * a.Create a variable named as product. Add price and discount as the keys for the product object.
    - Print if the discount is present, => After discount price
 * b.WAP with two variable, a and b. Check if b is less than or equal to zero.
    if, b is less than or equal to zero=> print, value of b should be greater than 0
    else, print => value of a divided by b =>>>(division by zero)
 * c. WAP to check whether a numeric variable is either even or odd. 
 */

// problem no.1
let product = {
    price: 1000, 
    discount: 9
}

let pr_aft_dsc = product.price - product.discount/100 * product.price;
if(product.discount > 0){
    console.log("The price of the product after discount is:", pr_aft_dsc);
} else{
    console.log("The price of the product is:", product.price);
}

// problem no. 2
let a = 10;
let b = 4;
if(b <= 0){
    console.log("Value of b is should be greater than zero.");
} else{
    console.log(a/b);
}


// problem no. 3
let c = 229324792374291;
if(c % 2 == 0){
    console.log(`${c} is an even number.`);
} else{
    console.log(`${c} is an odd number.`);
}

console.log('');

// Taking input from an user using prompt()
// let num = prompt("Enter a number:");
// if(num % 2 == 0){
//     console.log(`${num} is an Even number.`);
// } else{
//     console.log(`${num} is an Odd number.`);
// }
