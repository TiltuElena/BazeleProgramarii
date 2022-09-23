const monitor: number = 2000;
const bloc_sistem: number = 5000;
const tastiera: number = 3500;
const mouse: number = 500;
const imprimanta: number = 4500;
const N: number = 4;

const pret: number = N * (monitor + bloc_sistem + tastiera + mouse + imprimanta);

console.log(`Pretul a ${N} calculatoare cu componentele enumerate este: ${pret} lei.`);
