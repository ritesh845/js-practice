var arrayInteger = [1,2,3,4,5,6];

//Length Method (Give Count of Array)
console.log(arrayInteger.length);  // 6

// Slice Method

var arrayInteger = [1,2,3,4,5,6];
console.log(arrayInteger.slice(0,3)); // [1,2,3]
console.log(arrayInteger.slice(2,3)) // [3]

//Splice Method

var arrayInteger1 = [1,2,3,4,5,6];
console.log(arrayInteger1.splice(1,3)) // [2,3,4] 
console.log(arrayInteger1) // [1,5,6]   Remaining Array data
console.log(arrayInteger1.splice(2,3)) // [6]


// #Write the js function get first element of array
var array1 = [1,2,4,5,6];
if(array1.length  > 0 ){
    console.log(array1[0]); 
    console.log(array1.slice(0,1)); 
}

// #Write the js function get last element of array
var array1 = [1,2,4,5,6];
if(array1.length  > 0 ){
    console.log(array1[array1.length - 1 ]); 
    console.log(array1.slice(array1.length - 1)); 
}

