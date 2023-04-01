// class is a data structure to create a custom data type
// class User{
//     // data(variables) or state 
//     name;
//     email;
//     role;
//     address;
//     phone;

//     // methods(functions)
//     setName = (_name) => {
//         this.name = _name; // class vitra variable use garnako lagi use this(which points self)
//     }

//     getName = () => {
//         return this.name;
//     }
// }
// const user_obj = new User();
// const user_obj1 = new User();

// // user_obj.name;
// user_obj.setName("Shiva Surkheti");
// user_obj1.setName("Test User");

// console.log(user_obj.getName());
// console.log(user_obj1.getName());
// console.log(user_obj.getName());

// use of constructor func(method) :: class ma first mai call hunxa : it takes initial state variables
class User {
    name;
    email;
    role; 
    address;
    phone;

// object banaunu bittikai suru mai constructor func ma call pall gardinxa        
// class call garnu bittikai constructor  func call hunxa
// _name nai lekhnu parxa vanne xaina ; can write name
    constructor(name, email, role, address, phone){
        this.name = name;
        this.email = email;
        this.role = role;
        this.address = address;
        this.phone  = phone;
    }

    getName = () => {
        return this.name;
        
    }
    getEmail = () => {
        return this.email;
    }
    getAddress = () => {
        return this.address;
    }

}

const user_obj2 = new User("GoatX", "goatx@gmail.com", "Developer", "D-Town", 5485945894); // this is class ko call

// to update varibale 
user_obj2.name = "ShivaDaGoatOnTheMic";

console.log(user_obj2.getName());
console.log(user_obj2.getEmail());
console.log(user_obj2.getAddress());

const user_obj3 = new User("Believer", "believer@gmail.com", "Designer", "K-Town", 364837483434);
console.log(user_obj3.getName());
console.log(user_obj3.getEmail());
console.log(user_obj3.getAddress());

// class is used everywhere where we have to maintain data structure
class News {
    title;
    category;
    image;
    location;
    description;

    constructor(title, category, image, location, description){
        this.title = title;
        this.category = category;
        this.image = image;
        this.location = location;
        this.description = description;
    }

    getTitle = () => {
        return this.title;
    }

}

const news_obj = new News("MESSI", "Sports", "messi.jpg", "Argentina", "lfjslfjslfjsdlkfjsdklfjsklafjsalfkjsafjksalfjk");
console.log(news_obj.getTitle());

/**
 * Features of OOP
 * - Inheritance
 *      - class A <= class B <= class C
 * - Overriding 
 *      - class A -> a()
 *      -> class A <= class B -> a()
 * 
 * // Following four features are not possible in JavaScript
 * - Overloading
 * - Polymorphism
 * - Encapsulation
 * - Abstraction
 * */


































