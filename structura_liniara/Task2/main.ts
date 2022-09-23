let a: number = 7;
let b: number = 5;

a = a + b;
b = a - b;
a = a - b;

console.log(`a = ${a} si b = ${b}`);
/* metoda 2
let x: number;
x = a;
a = b;
b = x;

console.log(`a = ${a} si b = ${b}`);
 */
