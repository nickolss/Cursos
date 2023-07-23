const primeiroEUltimoElemento = (array) => {
	let result = [];
	result.push(array[0]);
	result.push(array[array.length - 1]);

    return result
};

console.log(primeiroEUltimoElemento([7, 14, "olá"]));
console.log(primeiroEUltimoElemento([-100, "aplicativo", 16]));
