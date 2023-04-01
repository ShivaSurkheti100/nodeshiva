/**
 * function = events, action , task, method :: It's a block of statements which perform actions
 * Code Blocks to perform the actions
 * a. Synchronous call
 *      - consequently: codes execute one after another
 * b. Asynchronous call
 *      - there is no wait for the next statement(line) execution
 * - function  must have a name: alphanumeric(add2) but always start from an alphabet
 * - function can take anything as input, known as parameter(argument)
 * - function executes only after function call
 * - function can return(optional) anything.
*/

// general way to make function
// function addNumber(a, b, c){
//     // function body
//     // functional logic
//     d = a + b + c;
//     return d;
// }

// let result = addNumber(-99, 99, 88); // function call(Using function)
// console.log("Result:", result);

// function ley return statement lidaina
// function addNumber(a, b){
//     c = a + b;
//     return c;
// }
// function printSum(a,b){
//     let result = addNumber(a, b);
//     console.log(result);
// }
// printSum(5,6);

// yo mero afno practice
// function multiply(x, y){
//     z = x * y;
//     console.log(z);
// }
// multiply(); // returns NaN(Not a Number)
// multiply(90, 80); // returns 7200

// function le argument lidaina
// let x = 10; // global variable accessible in JS
// let y = 99;
// function multiply(){
    //     z = x*y;
    //     console.log(z);
    // }
    // multiply(); // returns 990
    
    // mero afno practice
    // let x = 10; // global variable accessible in JS
    // let y = 99;
    // function multiply(x, y){
        //     z = x*y;
        //     console.log(z);
        // }
        // multiply(); // returns NaN
        
// parameter pass garena vane that parameter is undefined(null)
// this prob can be solved using default value 
                function addNumber(a, b){
                    c = a + b;
                    return c;
                }
                function printSum(a,b){
                    let result = addNumber(a, b);
                    console.log(result);
                }
                
                printSum(5); // returns NaN
                
        // default value in function means the value which make no change in the output of the func
        // function subtractNum(p, q=0){
        //     r = p-q;
        //     console.log(r);
        // }
        // subtractNum(3)
        
        // chaiyeko variable linxa nachaiyeko reject garxa func le
        function subtractNum(p, q){
            r = p-q;
            console.log(r);
        }
        subtractNum(3, 8, 7);
