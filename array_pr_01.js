// create an array of 10 elements with the following properties. Also print those values
// ProductName: Product One, Price: 10000, Discount: 10%, Brand: Brand One
// use can use =>>> node array_pr_01.js to run the code or directly use RUN Button

let products = [];      // nullOrEmptyArray
console.log(products);

let prod_1 = ["Product One", 30000, "10%", "Brand One"];
let prod_2 = ["Product Two", 40000, "19%", "Brand Two"];
let prod_3 = ["Product Three", 305000, "20%", "Brand Three"];
let prod_4 = ["Product Four", 4400, "17%", "Brand Four"];
let prod_5 = ["Product Five", 6000, "15%", "Brand Five"];
let prod_6 = ["Product Six", 90000, "25%", "Brand Six"];
let prod_7 = ["Product Seven", 80000, "30%", "Brand Seven"];
let prod_8 = ["Product Eight", 70000, "9%", "Brand Eight"];
let prod_9 = ["Product Nine", 39383, "8%", "Brand Nine"];
let prod_10 = ["Product Ten", 95493, "70%", "Brand Ten"];

// products.push(prod_1);
// products.push(prod_2);
// products.push(prod_3);
// products.push(prod_4);
// products.push(prod_5);
// products.push(prod_6);
// products.push(prod_7);
// products.push(prod_8);
// products.push(prod_9);
// products.push(prod_10);
products.push(prod_1, prod_2, prod_3, prod_4, prod_5, prod_6, prod_7, prod_8, prod_9, prod_10);
console.log(products);

console.log("Product Name:", products[0][0], ", Price:", products[0][1], ", Discount:", products[0][2], ", Brand:", products[0][3]);
console.log("Product Name:", products[1][0], ", Price:", products[1][1], ", Discount:", products[1][2], ", Brand:", products[1][3]);
console.log("Product Name:", products[2][0], ", Price:", products[2][1], ", Discount:", products[2][2], ", Brand:", products[2][3]);
console.log("Product Name:", products[3][0], ", Price:", products[3][1], ", Discount:", products[3][2], ", Brand:", products[3][3]);
console.log("Product Name:", products[4][0], ", Price:", products[4][1], ", Discount:", products[4][2], ", Brand:", products[4][3]);
console.log("Product Name:", products[5][0], ", Price:", products[5][1], ", Discount:", products[5][2], ", Brand:", products[5][3]);
console.log("Product Name:", products[6][0], ", Price:", products[6][1], ", Discount:", products[6][2], ", Brand:", products[6][3]);
console.log("Product Name:", products[7][0], ", Price:", products[7][1], ", Discount:", products[7][2], ", Brand:", products[7][3]);
console.log("Product Name:", products[8][0], ", Price:", products[8][1], ", Discount:", products[8][2], ", Brand:", products[8][3]);
console.log("Product Name:", products[9][0], ", Price:", products[9][1], ", Discount:", products[9][2], ", Brand:", products[9][3]);

// making simple object of arrays: to pull and push the codes(git ko concept bujna lai )
let items = {
    arr1: [545454, "String", true, [], {name:"shiva", address: "kTown"}],
    arr2: [[], [], ["goatX"]],
    arr3: []
}
console.log(typeof(items));

const expo = (num, pow) => {
    return num**pow;
}
let result = expo(4, 4);
console.log(result);





