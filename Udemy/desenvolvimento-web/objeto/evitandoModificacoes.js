//Object.preventExtensions

const produto = Object.preventExtensions({
	nome: "Qualquer",
	preco: 15,
	tag: "Promoção",
});
console.log("Extensível? " + Object.isExtensible(produto));

produto.nome = "Lápis";
produto.descricao = "Objeto de escrever"; //Não funcionará
delete produto.tag;
console.log(produto);

//Object.seal
const pessoa = {
	nome: "João",
	idade: 17,
};

Object.seal(pessoa);
console.log("Selado? " + Object.isSealed(pessoa));


//Object.freeze = Object.seal + valores constantes