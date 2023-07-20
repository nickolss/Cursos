Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([] , this.map(callback))
}

const escola = [
    {
        nome: "Turma M1",
        alunos: [
            {nome: "Carlos" , nota: 9.8},
            {nome: "Gustavo" , nota: 10}
        ]
    },
    {
        nome: "Turma M2",
        alunos: [
            {nome: "Ana" , nota: 9.5},
            {nome: "Marcos" , nota: 4.2},
        ]
    }
]

const getNotaAluno = (aluno) => aluno.nota
const getNotasTurma = (turma) => turma.alunos.map(getNotaAluno)


const notas1 = escola.map(getNotasTurma)
console.log(notas1)

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2)