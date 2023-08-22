console.log(Math.ceil(5.8));

const objeto = {};
objeto.nome = "Peão";
objeto["preco"] = 5.99;

console.log(objeto.nome);

function Objet(nome) {
	this.nome = nome;
	this.exec = function () {
		console.log("Executando...");
	};
}

const objeto2 = new Objet("Tabuleiro de Xadrez");
const objeto3 = new Objet("Bola");

console.log(objeto2.nome);
console.log(objeto3.nome);

objeto3.exec();
