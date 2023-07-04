function Aula(nome, videoId) {
	this.nome = nome;
	this.videoID = videoId;
}

const aula1 = new Aula("Bem vindo", 123);
const aula2 = new Aula("Até breve", 789);
console.log(aula1, aula2);

//Função para simular o operador NEW
function novo(funcao, ...params) {
	const obj = {};
	obj.__proto__ = funcao.prototype;
	funcao.apply(obj, params);
	return obj;
}

const aula3 = novo(Aula, "Bem vindo", 123);
console.log(aula3);