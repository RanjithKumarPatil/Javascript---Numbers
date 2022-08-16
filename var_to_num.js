// Coverting variables to Number
// By Number() method - It converts JS variables to Numbers
var x = "123456";
console.log(typeof x);
Number(x);
console.log(typeof Number(x)); // Here string is converted to number type

//Converting a date object to number
const d = new Date("july 29, 1998 14:25:45");
console.log(Number(d));

//Date object functions
const d1 = new Date();
console.log(d1);

const d2 = new Date().getTime();
console.log(d2);
