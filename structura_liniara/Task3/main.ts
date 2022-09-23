const p: number = 10;
const x: number = 15;
const S: number = 5000;
const sum: number = S + (x * ((S * p) / 100));

console.log(`Suma de bani a clientului care a depus ${S} lei pe ${x} ani cu o dobanda de ${p}% anual este de ${sum} lei.`);