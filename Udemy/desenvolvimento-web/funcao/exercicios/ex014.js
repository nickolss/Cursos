function venderFrutas(nomeFruta) {
	switch (nomeFruta) {
		case "maça":
		case "maca":
		case "Maça":
			return "Não vendemos essa fruta aqui";
			break

		case "KiwI":
		case "kiwi":
			return "Estamos com escassez de kiwis";
			break

		case "melancia":
		case "Melancia":
			return "Aqui está, são 3 reais o quilo";
			break

		default:
			return "Fruta inválida/ não possuímos";
	}
}

console.log(venderFrutas("melancia"))
console.log(venderFrutas("maca"))
console.log(venderFrutas("kiwi"))
