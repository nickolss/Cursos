//Arrow Function
const soma = (n1, n2) => n1 + n2;
console.log(soma(2, 3));

//Arrow Function (THIS)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({}); //Não irá mudar

lexico1();
lexico2();

//Parâmetro Default
function log(texto = "node") {
	console.log(texto);
}

log();
log("Sou mais forte que o valor default");

//Operador REST
function total(...numeros) {
	let total = 0;
	numeros.forEach((numero) => (total += numero));
	return total;
}

console.log(total(1, 2, 3, 4, 5));
