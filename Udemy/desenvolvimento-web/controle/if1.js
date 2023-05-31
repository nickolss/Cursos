function soBoaNota(nota) {
	if (nota >= 7) {
		console.log(`Aprovado com a nota ${nota}`);
	}
}

soBoaNota(9);
soBoaNota(6.1);

function seForVerdadeEuFalo(valor) {
	if (valor) {
		console.log(`É verdade... ${valor}`);
	}
}

//Valores FALSOS
seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo("");
seForVerdadeEuFalo(0);

//Valores Verdadeiros
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(" ");
seForVerdadeEuFalo("?");
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo({});