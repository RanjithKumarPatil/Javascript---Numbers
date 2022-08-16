////////////////////////////
// Delacring the variable
var x = 20;
var y = 12.8973;
console.log(x - y);

/////// Number Methods ///////////////
// toString() method //
var arr = [1, 2, 3];
arr.toString();
Object.prototype.toString();
console.log(typeof arr);

//toExponential() method ///
let a = 12;
console.log(a.toExponential(4));
console.log(typeof a.toExponential(4)); // returning the string value here

//toFixed() method //
// a = 123.456;
// console.log(a.toFixed(2)); // fixing decimal values here

// toPrecision() method//
a = 123.556;
console.log(a.toPrecision(3)); // Rounding the numbers based on values we give in the method

// valueOf() method //
var b = 20;
var c = 30;
console.log((a / b).valueOf());
console.log((a + b + c).valueOf());
console.log(typeof b.valueOf());

////////////////////////////////////////////////////////
