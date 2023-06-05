function calcularValorPlano(idade) {
	let valorTotal = 100;

	if (idade < 10) {
		valorTotal += 80;
	} else if (idade >= 10 && idade <= 30) {
		valorTotal += 50;
	} else if (idade > 30 && idade <= 60) {
		valorTotal += 95;
	} else if (idade > 60) {
		valorTotal += 130;
	}
}