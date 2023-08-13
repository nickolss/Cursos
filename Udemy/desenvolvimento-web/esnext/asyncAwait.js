const http = require("http");

const getTurma = (letraTurma) => {
	letraTurma = letraTurma.toUpperCase();
	const url = `http://files.cod3r.com.br/curso-js/turma${letraTurma}.json`;

	return new Promise((resolve, reject) => {
		http.get(url, (res) => {
			let resultado = "";

			res.on("data", (dados) => {
				resultado += dados;
			});

			res.on("end", () => {
				try {
					resolve(JSON.parse(resultado));
				} catch (error) {
					reject(error);
				}
			});
		});
	});
};

//Recurso do ES8
let obterAluno = async () => {
	const turmaA = await getTurma("a");
	const turmaB = await getTurma("b");
	const turmaC = await getTurma("c");

	return [].concat(turmaA, turmaB, turmaC);
};

obterAluno()
	.then((alunos) => alunos.map((aluno) => aluno.nome))
	.then((nomes) => console.log(nomes));
