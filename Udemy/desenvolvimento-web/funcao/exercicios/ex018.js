function escreverPorExtenso(num) {
	switch (num) {
		case 1:
			return "um";
			break

		case 2:
			return "dois";
			break

		case 3:
			return "três";
			break

		case 4:
			return "quatro";
			break

		case 5:
			return "cinco";
			break

		case 6:
			return "seis";
			break

		case 7:
			return "sete";
			break

		case 8:
			return "oito";
			break

		case 9:
			return "nove";
			break

		case 10:
			return "dez";
			break

		default:
			return "Número fora do intervalo";
	}
}

console.log(escreverPorExtenso(1))
console.log(escreverPorExtenso(5))
console.log(escreverPorExtenso(7))
console.log(escreverPorExtenso(12))