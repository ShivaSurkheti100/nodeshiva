// let i = 1;
// console.log(i++);           // 1
// console.log(i);             // 2
// console.log(i++);           //2
// console.log(i++);           //3
// console.log(i++);           //4
// console.log(i++);           //5

// Introduction to while loop
// let i = 1;
// while(i<=10){
//     console.log(i++);
// }
// console.log("");
// for loop
// for(let j = 1; j<=10; j++){
//     console.log(j);
// }

// Nested for loop for patterns :: nesting is used for mutli dimensional data structure
// Try not to use nesting as far as possible cause nesting makes code execution slow
// for(let j=1; j<=10; j++){
//     let html = "";
//     for(let i=1; i<=j; i++){
//         html += i + "   ";
//     }
//     console.log(html);
// }

for(let j=1; j<=10; j++){
    let html = "";
    for(let i=1; i<=j; i++){
        html += " *";
    }
    console.log(html);
}



// AmitNepali
// Add products in multidimensional array
// print the values using for map, for each funvtions and loop

let tech_lists = [
    {
      product_name: "IphoneMax",
      price: 100000,
      discount: 10,
      after_discount: 1000,
      category: "Phone",
      brand: "Apple",
    },
    {
      product_name: "PocoX3Pro",
      price: 37000,
      discount: 10,
      after_discount: 370,
      category: "Phone",
      brand: "xoami",
    },
    {
      product_name: "SamsungLED",
      price: 200000,
      discount: 10,
      after_discount: 2000,
      category: "Telivision",
      brand: "samsung",
    },
    {
      product_name: "AsusRog5",
      price: 150000,
      discount: 10,
      after_discount: 1500,
      category: "GamingPhone",
      brand: "Asus",
    },
    {
      product_name: "HPPavilionGaming",
      price: 200000,
      discount: 10,
      after_discount: 2000,
      category: "Computer",
      brand: "HP",
    },
  ];
  
  let html_str = "";
  
  let i = 0;
  let length = tech_lists.length;
  // USING WHILE LOOP
  // while (i < length) {
  //   html_str += "<tr>";
  //   html_str += "<td>" + (i + 1) + "</td>";
  //   html_str += "<td>" + tech_lists[i].product_name + "</td>";
  //   html_str += "<td>" + tech_lists[i].price + "</td>";
  //   html_str += "<td>" + tech_lists[i].discount + "</td>";
  //   html_str += "<td>" + tech_lists[i].after_discount + "</td>";
  //   html_str += "<td>" + tech_lists[i].category + "</td>";
  //   html_str += "<td>" + tech_lists[i].brand + "</td>";
  //   html_str += "</tr>";
  
  //   i++;
  // }
  
  
  // USING FOR LOOP
  // for(i=0; i<length; i++){
  //     html_str += "<tr>";
  //     html_str += "<td>" + (i + 1) + "</td>";
  //     html_str += "<td>" + tech_lists[i].product_name + "</td>";
  //     html_str += "<td>" + tech_lists[i].price + "</td>";
  //     html_str += "<td>" + tech_lists[i].discount + "</td>";
  //     html_str += "<td>" + tech_lists[i].after_discount + "</td>";
  //     html_str += "<td>" + tech_lists[i].category + "</td>";
  //     html_str += "<td>" + tech_lists[i].brand + "</td>";
  //     html_str += "</tr>";
  // }
  
  
  
  // USING FOR EACH LOOP
  // tech_lists.forEach((data, i) => {
  //     html_str += "<tr>";
  //     html_str += "<td>" + (i + 1) + "</td>";
  //     html_str += "<td>" + tech_lists[i].product_name + "</td>";
  //     html_str += "<td>" + tech_lists[i].price + "</td>";
  //     html_str += "<td>" + tech_lists[i].discount + "</td>";
  //     html_str += "<td>" + tech_lists[i].after_discount + "</td>";
  //     html_str += "<td>" + tech_lists[i].category + "</td>";
  //     html_str += "<td>" + tech_lists[i].brand + "</td>";
  //     html_str += "</tr>";
  // });
  
  
  // USING MAP 
  
  tech_lists.map((data, i) => {
      html_str += "<tr>";
      html_str += "<td>" + (i + 1) + "</td>";
      html_str += "<td>" + data.product_name + "</td>";
      html_str += "<td>" + data.price + "</td>";
      html_str += "<td>" + data.discount + "</td>";
      html_str += "<td>" + data.after_discount + "</td>";
      html_str += "<td>" + data.category + "</td>";
      html_str += "<td>" + data.brand + "</td>";
      html_str += "</tr>";
  });
  document.getElementById("tech_lists").innerHTML = html_str;
  
  
  // FILTER
  let tech_phone = tech_lists.filter((value, i) => value.category == "Phone");
  console.log(tech_phone);
  
