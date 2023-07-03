//Cadeia de Protótipos (prototype chain)

Object.prototype.atributo0 = "Z"; //Não é recomendado fazer isso

//Avô herda de Object.prototype
const avo = {
	atributo1: "A",
};

//Pai herda de avo
const pai = {
	__proto__: avo,
	atributo2: "B",
};

//Filho herda de pai
const filho = {
	__proto__: pai,
	atributo3: "C",
};

console.log(filho.atributo0);
console.log(filho.atributo1);
console.log(filho.atributo2);
console.log(filho.atributo3);

const carro = {
	velAtual: 0,
	velMaxima: 200,
	acelerarMais(delta) {
		if (this.velAtual + delta <= this.velMaxima) {
			this.velAtual += delta;
		} else if (this.velAtual + delta > this.velMaxima) {
			this.velAtual = this.velMaxima;
		}
	},
	status() {
		return `${this.velAtual}Km/h de ${this.velMaxima}Km/h`;
	},
};

const ferrari = {
	modelo: "F40",
	velMaxima: 324, //Está ocorrendo o shadowing (É como a sobreescrita do atributo do prototype)
};

const volvo = {
	__proto__: carro,
	modelo: "V40",
	status() {
		return `${this.modelo}: ${super.status()}`;
	},
};

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());
