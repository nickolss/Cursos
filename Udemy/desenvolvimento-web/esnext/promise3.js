const gerarNumeroEntre = (min, max) => {
	if (min > max) {
		[min, max] = [max, min];
	}

	return new Promise((resolve) => {
		const numAleatorio = parseInt(Math.random() * (max - min + 1) + min);
		resolve(numAleatorio);
	});
};

gerarNumeroEntre(10, 50).then(console.log);
