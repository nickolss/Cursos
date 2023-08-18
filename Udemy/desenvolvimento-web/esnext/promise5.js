function funcionarOuNao(valor, chanceErro) {
	return new Promise((resolve, reject) => {
		if (Math.random() < chanceErro) {
			reject("Ocorreu um erro");
		} else {
			resolve(valor);
		}
	});
}

funcionarOuNao("testando", 0.1)
	.then(console.log)
	.then(
		() => consol.log(""),
		(erro) => console.log(`Erro específico: ${erro}`)
	)
	.catch((erro) => console.log(erro));
