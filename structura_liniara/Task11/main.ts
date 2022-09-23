const firstNumber: number = 15;
const secondNumber: number = 10;

const sum: number = firstNumber + secondNumber;
const substract1: number = firstNumber - secondNumber;
const substract2: number = secondNumber - firstNumber;
const multiplicate: number = firstNumber * secondNumber;
const divison1: number = Math.floor(firstNumber / secondNumber);
const division2: number = Math.floor(secondNumber / firstNumber);

console.log(`Suma dintre ${firstNumber} si ${secondNumber} = ${sum}`);
console.log(`Diferenta dintre ${firstNumber} si ${secondNumber} = ${substract1}`);
console.log(`Diferenta dintre ${secondNumber} si ${firstNumber} = ${substract2}`);
console.log(`Produsul dintre ${firstNumber} si ${secondNumber} = ${multiplicate}`);
console.log(`Catul impartirii dintre ${firstNumber} si ${secondNumber} = ${divison1}`);
console.log(`Catul impartirii dintre ${secondNumber} si ${firstNumber} = ${division2}`);