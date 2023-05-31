function jurosSimples(capInicial = 0, taxaJurosAnual, tempoAplicacaoAnos) {
	let jurosSimples = capInicial * taxaJurosAnual * tempoAplicacaoAnos;
	let montante = capInicial + jurosSimples;
	return montante.toFixed(2);
}

function jurosCompostos(capInicial = 0, taxaJurosAnual, tempoAplicacaoAnos) {
	let montante = capInicial * ((1 + taxaJurosAnual) ** tempoAplicacaoAnos)
	return montante.toFixed(2);
}

console.log(jurosSimples(100 , 0.10 , 5))
console.log(jurosCompostos(100 , 0.10 , 5))
