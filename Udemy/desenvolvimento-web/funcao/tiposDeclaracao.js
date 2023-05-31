console.log(soma(2,5)) //Não dará erro porque o JS carrega todas as funções antes de executar o código
//console.log(subtracao(4,2)) //Dará erro porque essa variável ainda não foi criada


//Function declaration
function soma(x, y) {
	return x + y;
}

//Function expression
const subtracao = function (x, y) {
	return x - y;
};

//Named function expression (Pouco usada)
const mult = function mult(x, y) {
	return x * y;
};
