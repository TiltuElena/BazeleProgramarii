const tCelsius: number = 37;
const tKelvin: number = 273.15 + tCelsius;
const tFahrenheit: string = (tCelsius * 1.8 + 32).toFixed(2);

console.log(`${tCelsius} grade Celsius sunt ${tKelvin} grade Kelvin si ${tFahrenheit} grade Fahrenheit.`);