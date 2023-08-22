//Armazenando function em uma variavel

//Essa function não tem nome
const imprimirSoma = function (n1, n2) {
	console.log(n1 + n2);
};

imprimirSoma(2, 30);

//Armazenando função arrow em uma variável
const soma = (n1, n2) => {
	return n1 + n2;
};

console.log(soma(5, 8));

//Retorno implícito

//Usando isso não precisa colocar a palavra RETURN. Executa apenas 1 sentença de código
const subtracao = (n1, n2) => n1 - n2;
console.log(subtracao(2, 3));
