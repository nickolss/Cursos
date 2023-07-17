Array.prototype.map2 = function (callback) {
	const novoArray = [];
	for (let i = 0; i < this.length; i++) {
		novoArray.push(callback(this[i], i, this));
	}

	return novoArray;
};

const carrinho = [
	'{"nome": "Borracha" , "preco": 3.45}',
	'{"nome": "Caderno" , "preco": 13.90}',
	'{"nome": "Kit de Lápis" , "preco": 35.99}',
	'{"nome": "Caneta" , "preco": 4.99}',
];

const converteParaObjeto = (elemento) => JSON.parse(elemento);
const precoProduto = (elemento) => elemento.preco;

const precos = carrinho.map2(converteParaObjeto).map2(precoProduto);
console.log(precos);
