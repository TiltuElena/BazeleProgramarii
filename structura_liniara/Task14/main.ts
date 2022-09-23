const Z: number = 5;
const N: number = 8;
const O: number = 11;
const S: number = 5;
const P: number = 2;

const average: string = (((Z * 10) + (N * 9) + (O * 8) + (S * 7) + (P * 4)) / (Z + N + O + S + P)).toFixed(2);

console.log(`Nota medie a clasei este: ${average}.`);