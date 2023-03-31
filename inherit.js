// example of inheritance

// class User {
//     name;
//     username;
//     password;
// }

// class Person extends User {
//     role;
//     status;

// }

// let person_obj = new Person();
// person_obj.name = "GoatxdaDope";
// console.log(person_obj.name);

// using constructor and super ::  _name, _password ko thau ma simply name,password lekhey pani hunxa :: its just ot distinguish them
// this feature is constructor overriding
class User {
    name;
    username;
    password;

    constructor(_name, _username, _password){
        this.name = _name;
        this.username = _username;
        this.password = _password;
    }
}

class Person extends User {
    role;
    status;
    json_data;

    constructor(_name, _username, _password, _role, _status, _json_data){
        super(_name, _username, _password);
        this.role = _role;
        this.status = _status;
        this.json_data = _json_data;
    }
    
    // general func : this vanne pointer le getName() vitra matra point garxa :: value returned is undefined or value didaina
    // getName(){
    //     return this.name;
    // }

    // so use array function so that we can access parent class
    getPassword = () =>  { 
        return this.password;
    }

}

let person_obj = new Person("User's name", "username343", "admin123", "admin", "active", {test: "Testing"});
console.log(person_obj.name);
console.log(person_obj.getPassword());
// console.log(person_obj.json_data);
// constructor function ma J pani pass garna pauxa array, object, .......
























































































































