// general function
function getName(){
    return "Sandesh";
}

// arrow notation
const getName1 = () => {
    return "Sandesh";
}

// can use this for arrow notation too
const getName2 = () => "Sandesh";

// or yo pani tei ho ... can use let/ var in the place of const.
const getName3 = () => ("Sandesh");

// Above and below both does the same

// default function setTimeout
setTimeout(() => {
    //
}, 3000)

// general function
setTimeout = (function(){
    //
}, 3000)

// Note: function banauda sakesamma arrow notation ko func use bana.. it will not create a problem 

class Abc{
    getAbc = function(){
        // general func ko scope func vitra matrai simit hunxa
        this // this means object
    }

    getAbc1 = () => {
        // arrow notation ko scope purai class ko hunxa
        this
    }
}


// 3rd way to write func associated with object
const user = {
    name: "Shiva", 
    getName: () => {
        return user.name;
    }
}
user.getName();

 