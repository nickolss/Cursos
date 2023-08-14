const a = 1;
console.log(a);

const b = new Promise((resolve , reject) =>{
	resolve(["Ana", "Caio", "Maria", "João"]);
});

const primeiroElemento = (array) => array[0];
const primeiraLetra = (palavra) => palavra[0];
const letraMinuscula = (letra) => letra.toLowerCase();

b.then(primeiroElemento)
	.then(primeiraLetra)
	.then(letraMinuscula)
	.then(console.log); //Como o THEN sempre retorna parâmetro, não precisa dizer no console.log
