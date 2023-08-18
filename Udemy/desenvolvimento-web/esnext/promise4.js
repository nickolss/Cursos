const gerarNumeroEntre = (min, max, tempo) => {
	if (min > max) {
		[min, max] = [max, min];
	}

	return new Promise((resolve) => {
		setTimeout(() => {
			const numAleatorio = parseInt(Math.random() * (max - min + 1) + min);
			resolve(numAleatorio);
		}, tempo);
	});
};

const gerarVariosNumeros = () =>
	Promise.all([
		gerarNumeroEntre(1, 60, 4000),
		gerarNumeroEntre(1, 60, 1000),
		gerarNumeroEntre(1, 60, 500),
		gerarNumeroEntre(1, 60, 3000),
	]);

gerarVariosNumeros().then(console.log);
