const soParesComIndicesPares = (array) => {
	let resultado = [];
	array.forEach((numeros, indice) => {
		if (numeros % 2 == 0 && indice % 2 == 0) {
			resultado.push(numeros);
		}
	});

	return resultado;
};

console.log(soParesComIndicesPares([1, 2, 3, 4]));
console.log(soParesComIndicesPares([10, 70, 20, 43]));
