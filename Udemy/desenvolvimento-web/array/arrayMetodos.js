const pilotos = ["Vettel", "Hamilt", "Raikkonen", "Massa"];
pilotos.pop();
console.log(pilotos)

pilotos.push("Verstappen");
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift("Alonso")
console.log(pilotos)

//Funções do SPLICE
//Adicionar
pilotos.splice(2 , 0 , "Bottas" , "Massa")
console.log(pilotos)

//Remover
pilotos.splice(3 , 1)
console.log(pilotos)



const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(0 , 3)
console.log(algunsPilotos2)