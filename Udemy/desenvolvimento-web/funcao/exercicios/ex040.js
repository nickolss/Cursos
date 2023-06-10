function classificarNotas(notas) {
	let classificacao = [];

	notas.forEach((element) => {
		if (element >= 0 && element <= 4.9) {
			classificacao.push("D");
		} else if (element >= 5 && element <= 6.9) {
			classificacao.push("C");
		} else if (element >= 7 && element <= 8.9) {
			classificacao.push("B");
		} else if (element >= 9 && element <= 10) {
			classificacao.push("A");
		} else {
			classificacao.push("ERRO");
		}
	});

	return classificacao;
}

console.log(classificarNotas([4.5, 10, 9, 7.5 , 44]));
