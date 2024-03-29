//Estrategia 1 para gerar parâmetro padrão
function soma1(a, b, c) {
	a = a || 1;
	b = b || 1;
	c = c || 1;

	return a + b + c;
}

console.log(soma1());
console.log(soma1(3));
console.log(soma1(1, 2, 3));

//Estrategia 2,3 e 4 para gerar parâmetro padrão
function soma2(a, b, c) {
	a = a !== undefined ? a : 1;
	b = 1 in arguments ? b : 1;
	c = isNaN(c) ? 1 : c; //A mais segura é essa
	return a + b + c;
}

console.log(soma2());
console.log(soma2(3));
console.log(soma2(1, 2, 3));
console.log(soma2(0, 0, 0));

//valor padrão do ES2015
function soma3(a = 1, b = 2, c = 1) {
	return a + b + c;
}
