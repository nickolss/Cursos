function compararAltura(altura1, altura2, taxaCresc1, taxaCresc2) {
	if (altura1 == altura2) {
		console.log("As crianças são da mesma altura");
	} else if (altura1 < altura2) {
		let anos = 0;
		for (altura1; altura1 < altura2; altura1 += taxaCresc1) {
			anos++;
		}
		console.log(`A criança menor demorará ${anos} para ultrapassar a outra`);
	} else if (altura2 < altura1) {
		let anos = 0;
		for (altura2; altura2 < altura1; altura2 += taxaCresc2) {
			anos++;
		}
		console.log(`A criança menor demorará ${anos} para ultrapassar a outra`);
	}
}

compararAltura(100, 120, 40, 50);
