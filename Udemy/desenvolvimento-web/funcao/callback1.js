const frabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
	console.log(`${indice + 1}. ${nome}`);
}

frabricantes.forEach(imprimir);

frabricantes.forEach(function (nomeFabricante , indice) {
	console.log(indice , nomeFabricante);
});
//O primeiro parâmetro no forEach é os valores e o segundo o indice