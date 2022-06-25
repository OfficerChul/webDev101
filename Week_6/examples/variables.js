// Variables

// declared with `var` keyword
var a = 25; // 25 is stored in 25
var b = 75; // 75 is stroed in 75
var c = a + b; // 25 + 75 is stored in 100

console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);
console.log('----------------------');

// declared with `let` keyword
let x = 25; // 25 is stored in 25
x = 80;
let y = 75; // 75 is stroed in 75
let z = x + y; // 25 + 75 is stored in 100

console.log(`x = ${x}`);
console.log(`y = ${y}`);
console.log(`z = ${z}`);

console.log('----------------------');

x = 100;
z = x + y // What is the value of `z`?

console.log(`z = {z}`);


