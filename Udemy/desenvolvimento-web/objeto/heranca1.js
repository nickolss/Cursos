const ferrari = {
	modelo: "F40",
	velocidadeMax: 324,
};

const volve = {
	modelo: "V40",
	velocidadeMax: 250,
};

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)


function meuObjeto(){}
console.log(typeof Object , typeof meuObjeto)
console.log(Object.prototype , meuObjeto.prototype)