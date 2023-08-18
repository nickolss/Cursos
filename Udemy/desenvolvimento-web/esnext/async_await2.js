const gerarNumeroEntre = (min, max, numeroProibidos) => {
	if (min > max) {
		[min, max] = [max, min];
	}

	return new Promise((resolve, reject) => {
		const numAleatorio = parseInt(Math.random() * (max - min + 1) + min);
		if (numeroProibidos.includes(numAleatorio)) {
			reject("Número Repetido");
		} else {
			resolve(numAleatorio);
		}
	});
};

// gerarNumeroEntre(1, 5, [1, 2, 4]).then(console.log).catch(console.log);

async function gerarMegasena(quantidadeNumeros, tentativas = 1) {
	try {
		const numeros = [];
		for (let _ of Array(quantidadeNumeros).fill()) {
			numeros.push(await gerarNumeroEntre(1, 60, numeros));
		}
		return numeros;
	} catch (error) {
		if (tentativas > 10) {
			throw "Não deu certo";
		} else {
			return gerarMegasena(quantidadeNumeros, tentativas + 1);
		}
	}
}

gerarMegasena(5).then(console.log).catch(console.log);
