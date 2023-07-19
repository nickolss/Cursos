const alunos = [
	{ nome: "Joao", nota: 10, bolsista: true },
	{ nome: "Eduarda", nota: 9.8, bolsista: true },
	{ nome: "Caio", nota: 7, bolsista: false },
	{ nome: "Ana", nota: 5, bolsista: false },
];

const resultado = alunos
	.map((aluno) => aluno.nota)
	.reduce(function (acumulador, atual) {
		console.log(acumulador, atual);
		return acumulador + atual;
	});


