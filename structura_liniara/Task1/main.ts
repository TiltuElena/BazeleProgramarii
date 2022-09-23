const k: number = 2000;
const h: number = Math.floor(k / 3600);
const h_min: number = Math.floor((k % 3600) / 60);
const h_sec: number = Math.floor((k % 3600) % 60);

const min: number = Math.floor(k / 60);
const min_sec: number = Math.floor(k % 60);

console.log(`In ${k} secunde sunt ${h} ore, ${h_min} minute si ${h_sec} secunde.`);
console.log(`In ${k} secunde sunt ${min} minute si ${min_sec} secunde.`);