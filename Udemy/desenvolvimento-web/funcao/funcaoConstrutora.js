function Carro(velocidadeMaxima = 200, delta = 5) {
	//Atributo privado
	let velocidadeAtual = 0;

    //Exemplo de atributo publico
    //this.modelo = ""

	//Método publico
	this.acelerar = function () {
		if (velocidadeAtual + delta <= velocidadeMaxima) {
			velocidadeAtual += delta;
		} else {
			velocidadeAtual = velocidadeMaxima;
		}
	};

	//Método publico
	this.getVelocidadeAtual = function () {
		return velocidadeAtual;
	};
}
Carro.veçpco
const uno = new Carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());
