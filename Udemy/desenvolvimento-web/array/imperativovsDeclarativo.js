const alunos = [
	{ nome: "João", nota: 10 },
	{ nome: "Carlos", nota: 7.6 },
];

//Imperativo
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
	total1 += alunos[i].nota;
}

console.log(total1 / alunos.length);

//Declarativa

const getNota = (aluno) => aluno.nota;
const soma = (total, atual) => total + atual;

const total2 = alunos.map((aluno) => aluno.nota).reduce(soma)
console.log(total2 / alunos.length)