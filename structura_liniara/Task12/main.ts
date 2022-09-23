const firstNumber: number = 20;
const secondNumber: number = 11;
const thirdNumber: number = 4;

const average: string = ((firstNumber + secondNumber + thirdNumber) / 3).toFixed(2);
const divide: string = (Number(average) / secondNumber).toFixed(2);

console.log(`Media aritmetica a numerelor: ${firstNumber}, ${secondNumber} si ${thirdNumber} este ${average}`);
console.log(`Rezultatul impartirii mediei aritmetice ${average} la numarul ${secondNumber} este ${divide}`);