function compararPontuacao(pontuacoes) {
	let bateuRecord = 0;
	let menorPOntuacao = pontuacoes[0];

	for (let i in pontuacoes) {
		if (menorPOntuacao > pontuacoes[i]) {
			menorPOntuacao = pontuacoes[i];
		}

		if (pontuacoes[i + 1] > pontuacoes[i]) {
			bateuRecord++;
		}

		return [menorPOntuacao, bateuRecord];
	}
}

console.log(compararPontuacao([10, 20, 20, 8, 25, 3, 0, 30, 1]));
