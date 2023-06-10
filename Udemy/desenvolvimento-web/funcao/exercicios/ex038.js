function imprimirImpares(inicio = 0, fim = 100) {
	if (inicio > fim) {
        inicio = fim + inicio
        fim = inicio - fim
        inicio = inicio - fim        
    }

	for (let i = inicio; i <= fim; i++) {
		console.log(i);
	}
}

imprimirImpares(50, 10);
