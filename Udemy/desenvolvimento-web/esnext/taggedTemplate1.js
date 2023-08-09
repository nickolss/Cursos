//Tagged Templates - processar o template dentro da função
function tag(partes, ...valores) {
	console.log(partes);
	console.log(valores);
	return "Outra String";
}

const aluno = "João";
const situacao = "Aprovado";
console.log(tag`${aluno} está ${situacao}.`);
