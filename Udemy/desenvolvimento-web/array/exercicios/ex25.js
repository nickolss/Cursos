function buscarPalavrasSemelhantes(palavraDesejada, frase) {
	return frase.filter((palavra) => palavra.includes(palavraDesejada));
}

console.log(buscarPalavrasSemelhantes("pro" , ["programação" , "mobile" , "profissão"]))