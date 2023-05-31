const soma = function (a, b) {
	return a + b;
};

const imprimirResultado = function (a, b, operacao = soma) {
	console.log(operacao(a, b));
};

imprimirResultado(10, 4);

imprimirResultado(10, 4, function (a, b) {
	return a - b;
});

imprimirResultado(10, 4, (a, b) => a * b);

const pessoa = {
    falar : function(){
        console.log('Olá')
    }
}

pessoa.falar()