function soma() {
	let soma = 0;
	for (let i in arguments) {
		soma += arguments[i]; //Esse variáveis recebe todos os argumentos passados dentro da função, mesmo sem precisar pedir esse parâmetros
	}

	return soma;
}

console.log(soma(1,5))
console.log(soma(1,5, 4))
console.log(soma('a' , 'b' , 'c'))