//função sem retorno
function imprimirSoma(n1, n2) {
	console.log(n1 + n2);
}

imprimirSoma(2, 3);

//Função com retorno
function soma(n1 = 0, n2 = 0) {
	return n1 + n2;
}

console.log(soma(2, 10));
