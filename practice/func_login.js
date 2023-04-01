let username = "admin";
let password = "admin434";

function loginCheck(user_name, pass_word){
    if(user_name == username && pass_word == password){
        return true;
    } else{
        return false;
    }
}
let response = loginCheck("admin", "admin44");
if(response){
    console.log("Your username and password matched!")
} else{
    console.log("Your username and password does not match.")

}

// function is re-usable code block
function accessData(std_list){
    
}
accessData()