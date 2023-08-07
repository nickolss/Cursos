//Object.values e Object.entries
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj));
console.log(Object.entries(obj));

//Melhorias na Notação Literal
const nome = "carla";
const pessoa = {
	nome,
	ola() {
		return "Ola";
	},
};

console.log(pessoa.nome, pessoa.ola());

//Class
class Animal {}
class Cachorro extends Animal {
	falar() {
		return "au au";
	}
}

console.log(new Cachorro().falar())