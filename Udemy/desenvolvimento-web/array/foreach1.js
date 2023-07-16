const aprovados = ["Ana", "Bia", "Caio", "Jorge"];

aprovados.forEach(function (nome, indice, proprioArray) {
	console.log(`${indice + 1} - ${nome}`);
    console.log(proprioArray)
});

aprovados.forEach((nome) => {console.log(nome)});


const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)

//Seria o mesmo que: 

//aprovados.forEach(aprovado => {console.log(aprovado)})
    