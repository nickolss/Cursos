//Essa função verifica se um NÚMERO está entre um número e outro e será adicionada para qualquer variável do tipo NUMBER
Number.prototype.entre = function (inicio, fim) {
	return this >= inicio && this <= fim;
};

const imprimirResultado = (nota) => {
	if (nota.entre(9, 10)) {
		console.log("Quadro de Honra");
	} else if (nota.entre(7, 8.99)) {
		console.log("Aprovado");
	} else if(nota.entre(4 , 6.99)){
		console.log("Recuperação");
	}else if(nota.entre(0 , 3.99)){
        console.log("Reprovado");
    }else{
        console.log("Nota Inválida");
    }
};

imprimirResultado(10);
imprimirResultado(8.7);
imprimirResultado(5);
imprimirResultado(2);
imprimirResultado(45);
imprimirResultado(-1);

