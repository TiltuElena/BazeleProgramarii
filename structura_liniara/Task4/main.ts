const N_zile: number = 20;
const S: number = 3500;
const plata_luna: string = (N_zile * (S / 30)).toFixed(2);

console.log(`Gradinitei cu plata lunara de ${S} lei i s-a platit ${plata_luna} lei pentru ${N_zile} zile frecventate.`);