//Função em JS é First-Class Object (Citizens)
//Higher-order function

//Dá para criar uma função de forma literal
function fan1() {}

//Armazendo a função em uma variável
const fun2 = function () {};

//Armazenando a função dentro de um array
const fun3 = [function () {}];

//Armazenando em atributos de um objeto
const fun4 = {};
fun4.falar = function () {
	return "ola";
};

//Passar uma função como parâmetro
function run(fun) {
	fun();
}

run(function () {
	console.log("Teste");
});

//Uma função pode retornar/contar outra função
function somar(a , b){
    return function(c){
        console.log(a+b+c)
    }
}
somar(2, 3)(1)  