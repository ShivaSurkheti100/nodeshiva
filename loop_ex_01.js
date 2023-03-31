
let std_list = [
    {
        name: "Shiva",
        email: "edlsjf.kdfjsf@gmail.com",
        address: "K-Town",
        phone: 4453434355,
        group: "MERN Stack"
    },
    {
        name: "Amit",
        email: "edlsjf_kdfjsf@gmail.com",
        address: "D-Town",
        phone: 5434434355,
        group: "MERN Stack"
        
    }, 
    {
        
        name: "Krishna",
        email: "Krisjf.kdfjsf@gmail.com",
        address: "L-Town",
        phone: 9847377435,
        group: "MERN Stack"
    },
    {
        name: "Amit",
        email: "Arisjf.kdfjsf@gmail.com",
        address: "A-Town",
        phone: 9747377435,
        group: "MERN Stack"
        
    }, 
    {
        name: "Kiran",
        email: "boralisjf.kdfjsf@gmail.com",
        address: "K-Town",
        phone: 8947377435,
        group: "MERN Stack"

    }
];

let html_str = ""; // html variable
// string concatenation
// html_str += "<tr>";
// html_str += "<td>1</td>";
// html_str += "<td>" + std_list[0].name + "</td>";
// html_str += "<td>" + std_list[0].email + "</td>";
// html_str += "<td>" + std_list[0].address + "</td>";
// html_str += "<td>" + std_list[0].phone + "</td>";
// html_str += "<td>" + std_list[0].group + "</td>";
// html_str += "<td>Edit/Delete</td>";
// html_str += "</tr>";

// html_str += "<tr>";
// html_str += "<td>2</td>";
// html_str += "<td>" + std_list[1].name + "</td>";
// html_str += "<td>" + std_list[1].email + "</td>";
// html_str += "<td>" + std_list[1].address + "</td>";
// html_str += "<td>" + std_list[1].phone + "</td>";
// html_str += "<td>" + std_list[1].group + "</td>";
// html_str += "<td>Edit/Delete</td>";
// html_str += "</tr>";

// html_str += "<tr>";
// html_str += "<td>3</td>";
// html_str += "<td>" + std_list[2].name + "</td>";
// html_str += "<td>" + std_list[2].email + "</td>";
// html_str += "<td>" + std_list[2].address + "</td>";
// html_str += "<td>" + std_list[2].phone + "</td>";
// html_str += "<td>" + std_list[2].group + "</td>";
// html_str += "<td>Edit/Delete</td>";
// html_str += "</tr>";

// let i = 0 // index starts from zero
// html_str += "<tr>";
// html_str += "<td>" + (i+1) + "</td>";
// html_str += "<td>" + std_list[i].name + "</td>";
// html_str += "<td>" + std_list[i].email + "</td>";
// html_str += "<td>" + std_list[i].address + "</td>";
// html_str += "<td>" + std_list[i].phone + "</td>";
// html_str += "<td>" + std_list[i].group + "</td>";
// html_str += "<td>Edit/Delete</td>";
// html_str += "</tr>";
// i++; 

// html_str += "<tr>";
// html_str += "<td>" + (i+1) + "</td>";
// html_str += "<td>" + std_list[i].name + "</td>";
// html_str += "<td>" + std_list[i].email + "</td>";
// html_str += "<td>" + std_list[i].address + "</td>";
// html_str += "<td>" + std_list[i].phone + "</td>";
// html_str += "<td>" + std_list[i].group + "</td>";
// html_str += "<td>Edit/Delete</td>";
// html_str += "</tr>";
// i++; 

// html_str += "<tr>";
// html_str += "<td>" + (i+1) + "</td>";
// html_str += "<td>" + std_list[i].name + "</td>";
// html_str += "<td>" + std_list[i].email + "</td>";
// html_str += "<td>" + std_list[i].address + "</td>";
// html_str += "<td>" + std_list[i].phone + "</td>";
// html_str += "<td>" + std_list[i].group + "</td>";
// html_str += "<td>Edit/Delete</td>";
// html_str += "</tr>";
// i++; 

// using while loop 
// let i = 0; 
// let length = std_list.length;
// while(i<length){
//     html_str += "<tr>";
//     html_str += "<td>" + (i+1) + "</td>";
//     html_str += "<td>" + std_list[i].name + "</td>";
//     html_str += "<td>" + std_list[i].email + "</td>";
//     html_str += "<td>" + std_list[i].address + "</td>";
//     html_str += "<td>" + std_list[i].phone + "</td>";
//     html_str += "<td>" + std_list[i].group + "</td>";
//     html_str += "<td>Edit/Delete</td>";
//     html_str += "</tr>";
//     i++; 
// }

// Using for loop :: i<length cause for ex 4 elements ko indexed value starts from 0 , 1,2 3....
// let length = std_list.length;
// for(let i=0; i<length; i++){
//     html_str += "<tr>";
//     html_str += "<td>" + (i+1) + "< /td>";
//     html_str += "<td>" + std_list[i].name + "</td>";
//     html_str += "<td>" + std_list[i].email + "</td>";
//     html_str += "<td>" + std_list[i].address + "</td>";
//     html_str += "<td>" + std_list[i].phone + "</td>";
//     html_str += "<td>" + std_list[i].group + "</td>";
//     html_str += "<td>Edit/Delete</td>";
//     html_str += "</tr>";
// }
// document.getElementById('std_list').innerHTML = html_str;

// for-in and for-of loop only works with array datatype
// for-in loop returns index of an array
// for(let element in std_list){
//     console.log(element);
// }

// for-of loop returns the value of an array
// for(let i of std_list){
//     console.log(i);
// }

//functional loops : forEach, map, filter :: used mostly ::: These are array functions used for loop 
// std_list.forEach((data) =>{
//     console.log(data);
// })

// forEaach loop

// std_list.forEach((data, i) =>{

//     html_str += "<tr>";
//     html_str += "<td>" + (i+1) + "<s/td>";
//     html_str += "<td>" + std_list[i].name + "</td>";
//     html_str += "<td>" + std_list[i].email + "</td>";
//     html_str += "<td>" + std_list[i].address + "</td>";
//     html_str += "<td>" + std_list[i].phone + "</td>";
//     html_str += "<td>" + std_list[i].group + "</td>";
//     html_str += "<td>Edit/Delete</td>";
//     html_str += "</tr>";
// })

// document.getElementById('std_list').innerHTML = html_str;

// map loop :
// std_list.map((data) =>{
//     console.log(data);
// })

// std_list.map((data, i) =>{
//     html_str += "<tr>";
//     html_str += "<td>" + (i+1) + "<s/td>";
//     html_str += "<td>" + data.name + "</td>";
//     html_str += "<td>" + data.email + "</td>";
//     html_str += "<td>" + data.address + "</td>";
//     html_str += "<td>" + data.phone + "</td>";
//     html_str += "<td>" + data.group + "</td>";
//     html_str += "<td>Edit/Delete</td>";
//     html_str += "</tr>";
// })

// document.getElementById('std_list').innerHTML = html_str;

// filter loop
let std_ktm = std_list.filter((value) => value.address == "K-Town"); // use data or value or anything.
console.log(std_ktm);

// data/value vaneko first loop(iteration) ko lagi 0 index, second loop ko lagi 1 index......