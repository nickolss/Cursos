function Pessoa() {
	this.idade = 0;

    const self = this
    /*
	setInterval(function () {

		this.idade++;
		console.log(this.idade);
	}.bind(this), 1000);
    */
    //A função setInterval tem como parâmetros outra função e um intervalo de tempo. Ela basicamente fica executando durante um intervalo de tempo a função várias vezes

    setInterval(function () {
		self.idade++;
		console.log(self.idade);
	}, 1000);
}

new Pessoa();
