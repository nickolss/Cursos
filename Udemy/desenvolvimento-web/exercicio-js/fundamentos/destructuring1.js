//O desctructuring foi introduzido em ES2015

const pessoa = {
	nome: "Nickolas",
	idade: 16,
	endereco: {
		logradouro: "Rua ABC",
		numero: 1000,
	},
};

const { nome, idade } = pessoa;
console.log(nome, idade);

//Usando isso é criado 2 variáveis para receber os valores de NOME e IDADE
const { nome: nomePessoa, idade: idadePessoa } = pessoa; //OBS: Não precisa ter o mesmo nome da chave do objeto
console.log(nomePessoa, idadePessoa);

const { sobrenome, bemHumorada = true } = pessoa; //Usando a atribuição dá para adicionar um valor padrão
console.log(sobrenome, bemHumorada);

const {
	endereco: { logradouro, numero },
} = pessoa;
console.log(logradouro, numero);
