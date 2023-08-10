const times = new Set();
times.add(`Vasco`);
times.add(`Sao Paulo`).add("Palmeiras");
times.add("Flamengo");
times.add(`Vasco`);

console.log(times);
console.log(times.size);
console.log(times.has(`Vasco`));

const nomes = [`Joao`, `Marcos`, `Livia`];
const setNomes = new Set(nomes);
