let vetorInteiro = [1, 5, 7, 5, 10];
let vetorString = ["A", "B", "C", "D"];
let vetorDouble = [1.1, 5.6, 4.9, 9.2];

function concatenar(array1, array2) {
	let resultado = array1.concat(array2);
	return resultado;
}


//Usa quantos arrays o usuário quiser
function concatenar2(...args) {
	let result = [];
	for (let i = 0; i < arguments.length; i++) {
		result = result.concat(arguments[i]);
	}
	return result;
}

console.log(concatenar(vetorInteiro, vetorDouble));
console.log(concatenar2(vetorInteiro, vetorDouble, vetorString));
