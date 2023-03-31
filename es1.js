// import rw export feature ko ex

// const ucFirst = (str) => {
//     str = str.charAt(0).toUpperCase() + str.slice(1);
//     return str;
// }

// let result = ucFirst("test value");
// console.log(result);

// exporting in ES5 standard(named export)
// module.exports = ucFirst;

// exporting in es6 standard(named export)
// export const ucFirst = (str) => {
//     str = str.charAt(0).toUpperCase() + str.slice(1);
//     return str;
// }

const ucFirst = (str) => {
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}

const getSizeOfArray = (arr) => {
    return arr.length ;
}
// es6 default export
// export default ucFirst;

// multiple exports (all export) es6
export default {ucFirst, getSizeOfArray};




