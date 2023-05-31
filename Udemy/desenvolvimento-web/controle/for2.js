const notas = [4.8, 5, 10, 8.7, 9.5, 1.2, 6.5];

//A variável I recebe as posições do Array NOTAS
for(let i in notas){
    console.log(notas[i])
}


const pessoa = {
    nome: "João",
    sobrenome: "Manoel",
    idade: 17,
    endereco: "Longe"
}


for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
