//let e const
{
	var a = 1;
	let b = 2;
	console.log(b);
}

console.log(a);

//Template String
const produto = "MacBook";
console.log(`${produto} é caro!`);

//Destructuring
const [l, e, ...tras] = "Cod3r";

const [x, , y] = [1, 2, 3];
console.log(x, y);

const { idade, nome: nomeCrianca } = {
	nome: "Ana",
	idade: 9,
};

console.log(nomeCrianca, idade);
