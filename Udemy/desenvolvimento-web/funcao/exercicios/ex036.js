const multiplicacao = (num1, num2) => {
	let resultado = [];
	for (let i in num1) {
		resultado.push(num1[i] * num2[i]);
	}

	return resultado;
};

const multiplicacaoAcimaDeCinco = (num1, num2) => {
	let resultado = [];
	for (let i in num1) {
		if (num1[i] > 5 || num2[i] > 5) {
			resultado.push(num1[i] * num2[i]);
		}
	}

	return resultado;
};

console.log(multiplicacao([1, 2, 3], [2, 3, 4]));
console.log(multiplicacaoAcimaDeCinco([10, 8, 3], [2, 3, 4]));
