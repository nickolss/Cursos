const inverso = (valor) => {
	if (typeof valor == "boolean") {
		return !valor;
	} else if (typeof valor == "number") {
		if (valor != 0) {
			return valor * -1;
		} else {
			return 0;
		}
	} else {
		return (
			"Booleano ou número esperados, mas o parâmetro é do tipo " + typeof valor
		);
	}
};

console.log(inverso(true));
console.log(inverso("5"));
console.log(inverso(-2000));
console.log(inverso(10));
