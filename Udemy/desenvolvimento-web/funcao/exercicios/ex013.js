function definirDia(dia) {
	switch (dia) {
		case 1:
        case 7:
			return "Final de Semana";
			break
		case 2:
        case 3: 
        case 4:
        case 5:
        case 6:
			return "Dia útil";
			break

		default:
			return "Dia inválido";
	}
}

console.log(definirDia(1))