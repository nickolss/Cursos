const dispesasTotais = (dispesas) => {
	const soPreco = (dispesa) => dispesa.preco;
	const somaValores = (total, valor) => total + valor;

	return dispesas.map(soPreco).reduce(somaValores);
};

console.log(
	dispesasTotais([
		{ nome: "Jornal Digital", categoria: "Informação", preco: 89.99 },
		{ nome: "Cinema", categoria: "Entretenimento", preco: 150 },
	])
);


console.log(
	dispesasTotais([
		{ nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
		{ nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.99 },
	])
);
