const alunos = [
	{ nome: "Joao", nota: 10, bolsista: true },
	{ nome: "Eduarda", nota: 9.8, bolsista: true },
	{ nome: "Caio", nota: 7, bolsista: false },
	{ nome: "Ana", nota: 5, bolsista: false },
];

//Todos os alunos são bolsistas?
const todosBolsistas = (acumulador, bolsista) => acumulador && bolsista;

console.log(alunos.map((aluno) => aluno.bolsista).reduce(todosBolsistas));


//Algum aluno é bolsista?
const algumBolsista = (acumulador, bolsista) => acumulador || bolsista;

console.log(alunos.map((aluno) => aluno.bolsista).reduce(algumBolsista));
