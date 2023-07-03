const pessoa = { nome: "Caio" };
pessoa.nome = "Pedro";

console.log(pessoa.nome);

//Não é possível adicionar outro endereço de memória dentro do mesmo objeto, pois foi instânciado com CONST
/**
pessoa = {precoProduto: 19.99}
 */

Object.freeze(pessoa); //Impede que os atributos sejam modificados

//Ou seja, para criar um objeto imutável desde o início é:
const objetoConstante = Object.freeze({
	nome: "Artur",
	idade: 19,
});
