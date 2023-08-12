const http = require(`http`);

const getTurma = (letraTurma) => {
	letraTurma = letraTurma.toUpperCase();
	const url = `http://files.cod3r.com.br/curso-js/turma${letraTurma}.json`;

	return new Promise((resolve, reject) => {
		http.get(url, (res) => {
			let resultado = ``;

			res.on(`data`, (dados) => {
				resultado += dados;
			});

			res.on(`end`, () => {
				try {
					resolve(JSON.parse(resultado));
				} catch (error) {
					reject(error);
				}
			});
		});
	});
};

let nomes = [];

// getTurma("a").then((alunos) => {
// 	nomes = nomes.concat(alunos.map((aluno) => "A:" + aluno.nome));

// 	getTurma("b").then((alunos) => {
// 		nomes = nomes.concat(alunos.map((aluno) => `B: ${aluno.nome}`));

// 		getTurma(`c`).then((alunos) => {
// 			nomes = nomes.concat(alunos.map((aluno) => `C: ${aluno.nome}`));

// 			console.log(nomes);
// 		});
// 	});
// });

Promise.all([getTurma("a"), getTurma("b"), getTurma("c")])
	.then((turmas) => [].concat(...turmas))
	.then((turmas) => turmas.map((aluno) => aluno.nome))
	.then((turmas) => console.log(turmas))
	.catch((erro) => console.log(erro));
