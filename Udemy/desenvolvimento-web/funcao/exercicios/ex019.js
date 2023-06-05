function pedirLanche(codigoLanche, quantidade) {
	let valorFinal = 0;
	let valorLanche = 0;

	switch (codigoLanche) {
		case 100:
			valorLanche = 3;
			valorFinal = valorLanche * quantidade;
			return valorFinal.toFixed(2);
			break

		case 200:
			valorLanche = 4;
			valorFinal = valorLanche * quantidade;
			return valorFinal.toFixed(2);
			break

		case 300:
			valorLanche = 5.5;
			valorFinal = valorLanche * quantidade;
			return valorFinal.toFixed(2);
			break

		case 400:
			valorLanche = 7.5;
			valorFinal = valorLanche * quantidade;
			return valorFinal.toFixed(2);
			break

		case 500:
			valorLanche = 3.5;
			valorFinal = valorLanche * quantidade;
			return valorFinal.toFixed(2);
			break

		case 600:
			valorLanche = 2.8;
			valorFinal = valorLanche * quantidade;
			return valorFinal.toFixed(2);
			break

        default:
            return "Código Inválido"
	}
}

console.log(pedirLanche(100 , 2))
console.log(pedirLanche(300 , 2))
console.log(pedirLanche(500 , 2))
console.log(pedirLanche(900 , 2))
