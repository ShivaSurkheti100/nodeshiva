
let product = {
    name: "Product Name",
    price: 1000,
    discount: 17,
    stock: 11,
    brand: "One Plus"
};
// console.log(product["name"]);
// console.log(product.brand);

// Object of array, array of object
let all_pro = {
    discounted: [], 
    other: [{}, {}, {}, {}]
}

// Array of Objects : maximum used in project

let all_product = [
    {
        name: "Product One", 
        price: 75934, 
        discount: 8,
        stock: 200, 
        brand: "RealMe"
    }, 
    {
        name: "Product One", 
        price: 75934, 
        discount: 8,
        stock: 200, 
        brand: "RealMe"
    }
];

// Object of Objects

let address = {
    perm: {
        name: "Dhading",
        ward: 6
    },
    temp: {
        name: "Kathmandu",
        ward: 6
    }
};

// .keys and .values returns an array [] datatype
let prod_1 = {
    name: "Poco M3",
    price: 20000,
    discount: 3,
    stock: 5,
    brand: "Xiaomi"
}
let keys = Object.keys(prod_1);
let values = Object.values(prod_1);
console.log(keys); // returns an array
console.log(values); // returns an array

// delete key-value pair
delete prod_1.discount;
// console.log(prod_1)
// add new key-value pair
prod_1.seller = "Shiva Surkheti"
// console.log(prod_1)

// JSON(JavaScript Object Notation) : similar to Object : JSON is Universal data format
let json_obj = {
    "key": "value", 
    "name": "GoatX", 
    "phone": 983293297
};
// console.log(typeof(json_obj));
console.log(json_obj);

// access values in json
console.log(json_obj.phone);
console.log(json_obj.key);

// json function :: VVI

// to convert object datatype into json
let json_string = JSON.stringify(prod_1);
console.log(json_string);

// to convert json to object
let obj_data = JSON.parse(json_string);
console.log(obj_data);


