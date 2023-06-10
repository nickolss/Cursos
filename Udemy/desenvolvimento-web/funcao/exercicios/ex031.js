function verificaNegativos(numeros) {
	let numerosMenorZero = 0;

	numeros.forEach((num) => {
		if (num < 0) {
			numerosMenorZero++;
		}
	});

	return numerosMenorZero;
}

console.log(verificaNegativos([-1, 50, -2, -5, 12, 20]));
