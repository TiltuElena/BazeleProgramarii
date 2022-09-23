const pret_bomboane: number = 20;
const pret_biscuiti: number = 15;
const pret_mere: number = 10;

const X: number = 4;
const Y: number = 5;
const Z: number = 10;

const pret_total_bomboane: number = pret_bomboane * X;
const pret_total_biscuiti: number = pret_biscuiti * Y;
const pret_total_mere: number = pret_mere * Z;
const cost: number = (pret_total_bomboane) + (pret_total_biscuiti) + (pret_total_mere);

console.log(`Costul total a ${X}kg de bomboane este: ${pret_total_bomboane} lei.`);
console.log(`Costul total a ${Y}kg de biscuiti este: ${pret_total_biscuiti} lei.`);
console.log(`Costul total a ${Z}kg de mere este: ${pret_total_mere} lei.`);
console.log(`Costul total al cumparaturilor este ${cost} lei.`);