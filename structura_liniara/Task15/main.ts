const N: number = 8;
const M: number = 30;
const lesson: number = 45;
const shortBreak: number = 10;
const longBreak: number = 15;

const schoolDay: number = (lesson * 6) + (longBreak * 2) + (shortBreak * 3);
let schoolDayHours: number = Math.floor(schoolDay / 60) + N;
let schoolDayMinutes: number | string = (schoolDay % 60) + M;

if (schoolDayMinutes === 60) {
  schoolDayMinutes = '00';
  schoolDayHours += 1;
} else if (schoolDayMinutes > 60) {
  schoolDayHours += Math.floor(schoolDayMinutes / 60);
  schoolDayMinutes = schoolDayMinutes % 60;
}

console.log(`Ora finalizarii lectiei a 6-a este:${schoolDayHours}:${schoolDayMinutes}`);