//Operador ... como rest(juntas) e spread(separar)

//usar spread com objeto
const funcionario = {
	nome: "Maria",
	salario: 12348.99,
};

const clone = { ativo: true, ...funcionario };
console.log(clone)

//usar spread com array
const grupoA = ["Ana", "Alex", "Bianca"];
const grupoFinal = ["Maria", "Rafaela", ...grupoA];
console.log(grupoFinal)