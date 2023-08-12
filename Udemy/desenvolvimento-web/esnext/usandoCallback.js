const http = require(`http`);

const getTurma = (letraTurma, callback) => {
	letraTurma = letraTurma.toUpperCase();
	const url = `http://files.cod3r.com.br/curso-js/turma${letraTurma}.json`;

	http.get(url, (res) => {
		let resultado = ``;

		res.on(`data`, (dados) => {
			resultado += dados;
		});

		res.on(`end`, () => {
			callback(JSON.parse(resultado));
		});
	});
};

let nomes = [];

getTurma("a", (alunos) => {
	nomes = nomes.concat(alunos.map((aluno) => "A:" + aluno.nome));

	getTurma("b", (alunos) => {
		nomes = nomes.concat(alunos.map((aluno) => `B: ${aluno.nome}`));

		getTurma(`c`, (alunos) => {
            nomes = nomes.concat(alunos.map(aluno=> `C: ${aluno.nome}`))

            console.log(nomes)
        });
	});
});
