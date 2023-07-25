const funcaoDaSorte = (num) => {
	const numeroRandom = parseInt(Math.random() * (10 - 1 + 1) + 1);

	if (num == numeroRandom) {
		return `Parabéns! O número sorteado foi o ${numeroRandom}`;
	}

	return `Que pena! O número sorteado foi o ${numeroRandom}`;
};

console.log(funcaoDaSorte(10))
