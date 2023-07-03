//Um objeto é uma coleção dinâmica de pares / valor
const produto = new Object();
produto.nome = "Cadeira";
produto["Marca Produto"] = "Genérica";
produto.preco = 512.88;

console.log(produto);

delete produto.preco;
delete produto["Marca Produto"];
console.log(produto);

const Carro = {
	modelo: "A4",
	valor: 89000,
	proprietario: {
		nome: "Marcos",
		idade: 44,
		endereco: {
			logradouro: "Rua ABC",
			numero: 123,
		},
	},
	condutores: [
		{
			nome: "Junior",
			idade: 19,
		},
		{
			nome: "Maria",
			idade: 23,
		},
	],
	calcularValorSeguro: function () {
		//CÓDIGO
	},
};

Carro.proprietario.endereco.numero = 321;
Carro['proprietario']['endereco']['logradouro'] = "Rua bla"
console.log(Carro)

delete Carro.condutores
console.log(Carro)