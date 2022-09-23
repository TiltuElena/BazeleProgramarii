const A: number = 13;
const B: number = 8;
const C: number = 4;

const S: number = A * B;
const lateralS: number = (2 * (B * C)) + (2 * (A * C));

console.log(`Aria podelei unei camere ce are ${A}m lungime si ${B}m latime este de ${S}m^2.`);
console.log(`Suprafata laterala a unei camere ce are ${A}m lungime, ${B}m latime si inaltimea ${C}m este ${lateralS}m^2.`);