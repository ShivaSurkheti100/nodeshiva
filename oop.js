/**
 * oop has two types of object oriented approach:
 * Prototype based & Class based
 * Every data type is of an object datatype in OOP
 * inside class there's functions and data
 * JavaScript is both class based and protype based oop (for plugin development)
 * 
 */

// class based oop
class User{

    getUser = () => {

    }
}
let user_obj = new User();
user_obj.getUser();

// protype based oop :: here Person is class and person_obj is an object
// functional structure
function Person(){      // functional constructor
    
    //  this dot le func lai class ma convert garxa(func vitra matra)
    this.name = ""; 
}

Person.prototype.getPerson = function() {

}

let person_obj = new Person();      // making an object

// object is needed to access the func inside class

person_obj.getPerson();