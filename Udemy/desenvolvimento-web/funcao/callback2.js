const notas = [7.7, 6.5, 9, 3.6, 10, 9.1, 8.4, 2.6];

//Sem usar o callback
let notasBaixas = [];

for (let i in notas) {
	if (notas[i] < 7) {
		notasBaixas.push(notas[i]);
	}
}

console.log(notasBaixas);

//Com callback
const notasBaixas2 = notas.filter(function (nota) {
	return nota < 7;
});
//A função FILTER não altera o array notas. O filter faz uma verificação, caso seja positivo entra para o array final
console.log(notasBaixas2);

const notasBaixas3 = notas.filter((nota) => nota < 7);
console.log(notasBaixas3);
