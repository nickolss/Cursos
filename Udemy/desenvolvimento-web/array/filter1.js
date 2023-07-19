const produtos = [
	{
		nome: "notebook",
		preco: 2599.99,
		fragil: true,
	},
	{
		nome: "ipad pro",
		preco: 7500.0,
		fragil: true,
	},
	{
		nome: "copo de vidro",
		preco: 12.99,
		fragil: true,
	},
	{
		nome: "copo de plástico",
		preco: 10.99,
		fragil: false,
	},
];

console.log(
	produtos.filter(function (elemento) {
		return elemento.preco > 2500;
	})
);

const produtoFragil = (elemento) => elemento.fragil;
const produtoCaro = (elemento) => elemento.preco >= 500;

console.log(produtos.filter(produtoFragil).filter(produtoCaro));
