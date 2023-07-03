//Usando notação literal
const obj1 = {};

console.log(obj1);

//Através do Object em JS
const obj2 = new Object();
console.log(obj2);

//Criando suas funções construtoras
function Produto(nome, preco, desconto) {
	//Por começar com THIS, essas variáveis são PÚBLICAS
	this.nome = nome;
	this.preco = preco;

	this.getPrecoComDesconto = () => {
		return preco * (1 - desconto);
	};
}

const produto1 = new Produto("Mouse", 25, 0.25);
console.log(produto1.getPrecoComDesconto());

//Função Factory (É uma função que cria alguma coisa, nesse caso que cria objetos)
function criarFuncionario(nome, salarioBase, faltas) {
	return {
		nome,
		salarioBase,
		faltas,
		getSalario() {
			return (salarioBase / 30) * (30 - faltas);
		},
	};
}

const funcionario1 = criarFuncionario("Alex", 2000, 10);
console.log(funcionario1.getSalario())


//Usando a função Object.create
const filha = Object.create(null)
filha.nome = "Ariel"
console.log(filha)

//Usando a função JSON.parse (Essa função é MUITO utilizada)
const objFromJSON = JSON.parse('{"Nome": "Nickolas"}')
console.log(objFromJSON)