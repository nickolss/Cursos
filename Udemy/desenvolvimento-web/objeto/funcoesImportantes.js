const pessoa = {
	nome: "Ana",
	idade: 15,
	peso: 45,
};

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa)); //Retorna um ARRAY de conto chave - valor

Object.entries(pessoa).forEach(([chave, valor]) => {
	console.log(`${chave} --> ${valor}`);
});
//Aqui é pego o 1 elemento do array devolvido pelo Objeto.entries e nomeia de CHAVE e pega o segundo elemento retornado pelo Object.entries e nomeia de VALOR


//FUNÇÃO OBJECT.DEFINEPROPERTY
Object.defineProperty(pessoa, "dataNascimento", {
	enumerable: false, //Define se a propriedade é visível com Object.keys
	writable: false, //Define se a propriedade é modificável
	value: "23/03/2007", //Define o valor da propriedade
});

console.log(Object.keys(pessoa));
console.log(pessoa.dataNascimento);

//FUNÇÃO OBJECT.ASSIGN
const objDestino = {
	a: 1,
};

const obj1 = {
	b: 5,
};

const obj2 = {
	a: 4,
};

Object.assign(objDestino, obj1, obj2);
console.log(objDestino)