function venderAutomovel(modeloCarro) {
	switch (modeloCarro) {
		case "hatch":
			return "Compra efetuada com sucesso";
			break

		case "sedans":
		case "caminhonete":
		case "motocicleta":
			return "Tem certeza que não prefere este modelo?";
			break

		default:
			return "Não trabalhamos com este tipo de automóvel aqui";
	}
}


console.log(venderAutomovel("hatch"))
console.log(venderAutomovel("motocicleta"))
console.log(venderAutomovel("bicicleta"))