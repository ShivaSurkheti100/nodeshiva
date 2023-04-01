
// control statements : code blocks which control the flow of the program.
/**
 * if-else
 * else-if
 * switch case
 * => loop
 *      - while
 *      - for
 *      - forEach
 *      - map
 *      - filter
 *      - for-in
 *      - for-of
 */

// Decision  making statements
let age = 33;
if(age >= 33){
    console.log("Access granted");
} else{
    console.log("Not eligible");
}

// check login
let logged_in = true;
if(logged_in){
    console.log("Access granted");
}

// truthy value : true
// falsy value =>> null, undefined, '' , "", ``, false, 0, any null variable

 // if block doesnot run in falsy value
let bool_false = false;
if(bool_false){        
    console.log("Access denied");
} else{
    console.log("You're welcome");
}

// if block doesnot run in falsy value
if(null){
    console.log("Fuck");
}
else{
    console.log("Done!");
}

// per > 80    `     => Distinction
// per >=60 && <80   => First Div
// per >=45 && <60   => Second Div
// per >= 32 && <45  => Third Div
// per < 32     `   `=> Sorr! You are failed

let marks_obt = 320;
let total = 500;
let per = marks_obt / total * 100;

// nested if-else statement : nested statement takes longer execution time
if (per > 80){
    console.log("Passed with Distinction. Per:", per);
} else{
    if(per >= 60 && per < 80){
        console.log("Passed with First Division. Per:", per);
    } else{
        if(per >= 45 && per < 60){
            console.log("Passed with Second Division. Per:", per);
        } else{
            if(per >=32 && per < 45){
                console.log("Passed with Third Division. Per:", per);
            } else{
                console.log("Sorr! You are failed.");
            }
        }
    }
}
console.log("");
// else-if statement : use it instead of nested if-else statement

if(per > 80){
    console.log("Passed with Distinction. Per:", per);
} else if(per >= 60 && per < 80){
    console.log("Passed with First Division. Per:", per);
} else if(per >= 45 && per < 60){
    console.log("Passed with Second Division. Per:", per);
} else if(per >=32 && per < 45){
    console.log("Passed with Third Division. Per:", per);
} else{
    console.log("Sorr! You are failed.");
}


// switch-case statement : It's used for exact match value (==)
// CRUD(create, read, update, delete) operation
// add, edit, delete, view operations

let act = "";
if (act == "add"){
    console.log("Add Data");
} else if(act == "edit"){
    console.log("Update Data");
} else if(act == "delete"){
    console.log("Delete Data")
} else{
    console.log("View Data");
}

// default ma break laye ni hunxa ya nalaye ni .. optional
switch(act){
    case "add":
        console.log("Add Data");
        break;
    case "edit":
        console.log("Edit Data");
        break;
    case "delete":
        console.log("Delete Data");
        break;
    default:
        console.log("View Data");
        // break; => break is optional in default
}

// Ex. Sunday and Saturday Weekend/Holiday and other weekday
let day = "Saturday";
if(day == "Sunday" || day == "Saturday"){
    console.log("Holiday");
} else{
    console.log("Weekday");
}

// 1st way of switch case
switch(day){
    case "Saturday":
        // console.log("Holiday");
        break;
    case "Sunday":
        // console.log("Holiday");
        break;
    default:
        // console.log("Weekday");
}

// 2nd way
switch(day){
    case "Sunday":
    case "Saturday":
        console.log("Holiday");
        break;
    // case "Monday":
    // case "Tuesday":
    // case "Wednesday":
    // case "Thursday":
    // case "Friday":
    //     console.log("Weekday");
    default:
        console.log("Weekday");
}