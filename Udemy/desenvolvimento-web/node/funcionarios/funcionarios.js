const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");
const soMulheres = (funcionario) => funcionario.genero == "F";
const chinesa = (funcionario) => funcionario.pais == "China";
const menorSalario = (funcionario, funcionarioAtual) => {
	return funcionario.salario < funcionarioAtual.salario
		? funcionario //Se o funcionario ganha menos retorna o funcionario
		: funcionarioAtual; //Se o funcionário atual do loop ganha menos, retorna o funcionário atual
};

axios.get(url).then((response) => {
	const funcionarios = response.data;

	const func = funcionarios
		.filter(soMulheres)
		.filter(chinesa)
		.reduce(menorSalario);

    console.log(func)
});
