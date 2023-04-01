// shows both output
let login = (username, password, cb) => {
    cb(null, true);
    cb(true, null);

}

let setDisplay = (err, data) => {
        console.log("Err:", err);
        console.log("Data:", data);
}

login("admin", "admin123", setDisplay);

// shows only one output
// let login = (username, password, cb) => {
//     let success = true;
//     if(success){
//         cb(null, true);
//     }else{
//         cb(true, null);
//     }
// }

// let setDisplay = (err, data) => {
//     if(err){
//         console.log("Err:", err);
//     } else{
//         console.log("Data:", data);
//     }
// }
// login("admin", "admin123", setDisplay);