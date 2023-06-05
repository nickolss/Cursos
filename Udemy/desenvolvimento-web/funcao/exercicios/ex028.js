function verificaPares(numeros) {
	for (let i in numeros) {
		if (numeros[i] % 2 == 0) {
			console.log(numeros[i]);
		}
	}
}

verificaPares([12, 5, 18, 46, 121, 1, 3, 5, 10]);
