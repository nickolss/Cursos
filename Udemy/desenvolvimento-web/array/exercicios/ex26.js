const removerVogar = (frase) => {
	const semVogais = (letra) =>
		letra != "a" &&
		letra != "e" &&
		letra != "i" &&
		letra != "o" &&
		letra != "u";

	return frase.split("").filter(semVogais).reduce((novaFrase, letra) => novaFrase + letra)
};

console.log(removerVogar("Cod3er"));
console.log(removerVogar("Fundamentos"));
