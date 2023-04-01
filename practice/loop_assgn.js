/**
 * Create a table in html to print the product information. The table architecture would be like thiss:
 * SN   Product Name    Price   Discount    After Discount  Category    Brand
 * . Add products in an multidimensional array
 * . Print the values using for, map, forEach functions and loop
 */

let prod_details = [
    {
        product_name: "Product One",
        price: 10000,
        discount: "20%",
        aft_dsc: 8000,
        category: "Mobile",
        brand: "Samsung"
    },
    {
        product_name: "Product Two",
        price: 100,
        discount: "11%",
        aft_dsc: 89,
        category: "Stationery",
        brand: "Notebook"
    }, 
    {
        product_name: "Product Three",
        price: 9090,
        discount: "10%",
        aft_dsc: 8181,
        category: "Body Spray",
        brand: "Fogg"
    },
    {
        product_name: "Product Four",
        price: 100000,
        discount: "10%",
        aft_dsc: 90000,
        category: "Laptop",
        brand: "Nitro"
    },
    {
        product_name: "Product Five",
        price: 2000 ,
        discount: "10%",
        aft_dsc: 1800,
        category: "Smoking",
        brand: "Vape"
    }

];

// Using while loop 
// let html_str = "";
// let length = prod_details.length;
// let i = 0;
// while(i<length){
//     html_str += "<tr>";
//     html_str += "<td>" + (i+1) + "</td>";
//     html_str += "<td>" + prod_details[i].product_name + "</td>";
//     html_str += "<td>" + prod_details[i].price + "</td>";
//     html_str += "<td>" + prod_details[i].discount + "</td>";
//     html_str += "<td>" + prod_details[i].aft_dsc + "</td>";
//     html_str += "<td>" + prod_details[i].category + "</td>";
//     html_str += "<td>" + prod_details[i].brand + "</td>";
//     html_str += "</tr>";
//     i++;
// }
// Using for loop 
// let html_str = "";
// let length = prod_details.length;
// for(let i = 0; i<length; i++){
    // }
    
// Using forEach
// let html_str = "";
// prod_details.forEach((data, i) =>{
    // })
    
    // using map
let html_str = "";
prod_details.map((data, i) => {
    html_str += "<tr>";
    html_str += "<td>" + (i+1) + "</td>";
    html_str += "<td>" + data.product_name + "</td>";
    html_str += "<td>" + data.price + "</td>";
    html_str += "<td>" + data.discount + "</td>";
    html_str += "<td>" + data.aft_dsc + "</td>";
    html_str += "<td>" + data.category + "</td>";
    html_str += "<td>" + data.brand + "</td>";
    html_str += "</tr>";
})
document.getElementById('prod_details').innerHTML = html_str;

// Using filter ::: check there in console
// let html_str = "";
let prod_dsc = prod_details.filter((data) => data.discount == "10%");
console.log(prod_dsc);

