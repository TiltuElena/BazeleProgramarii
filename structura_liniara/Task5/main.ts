const square1: number = 5;
const square2: number = 7;

const S1 = Math.pow(square1, 2);
const S2 = Math.pow(square2, 2);

let difference: number;

if (square1 > square2) {
  difference = S1 - S2;
} else {
  difference = S2 - S1;
}
console.log(`Diferenta dintre ariile patratului cu latura ${square1} si aria ${S1} si patratul cu latura  ${square2} si aria ${S2} este ${difference}.`);