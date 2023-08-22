const saudacao = "opa"; //Contexto léxico 1

function exec() {
	const saudacao = "salve"; //contexto léxico 2
	return saudacao;
}

//objetos são grupos de nome e valor
const cliente = {
	nome: "Pedro",
	idade: 32,
	peso: 90,
	endereco: {
		logradouro: "Rua random dms",
		numero: 188,
	},
};

console.log(saudacao);
console.log(exec());
console.log(cliente);
