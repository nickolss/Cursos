const multiplicacao = (num1, num2) => {
	if (num1 < 0 || num2 < 0) {
		return "Impossível realizar operação";
	} else {
		let result = 0;

		for (let i = 1; i <= num2; i++) {
			result += num1;
		}

		return result;
	}
};

console.log(multiplicacao(5, 5));
console.log(multiplicacao(0, 7));
