// difference between == and === operators

console.log(0 == false);  // true
console.log(0 === false);  // false
console.log(1 == "1");     // true
console.log(1 === "1");    // false
console.log(null == undefined) // true
console.log(null === undefined) // false
console.log('0' == false) // true
console.log('0' === false) // false
console.log([]==[]); console.log([]===[]); //false, refer different objects in memory
console.log({}=={}); console.log({}==={}); //false, refer different objects in memory
console.log(NaN == NaN); console.log(NaN === NaN)  // numerice NaN is not equal to anything including NaN