function calcularMediaAritmetica(numeros) {
	let soma = 0;
	for (let i in numeros) {
		soma += numeros[i];
	}

	let result = soma / numeros.length;

	return result
}

console.log(calcularMediaAritmetica([1, 2, 3]));
