//Middleware patern (Chain of responsability)

const passo1 = (contexto, next) => {
	contexto.valor1 = "mid1";
	next();
};

const passo2 = (contexto, next) => {
	contexto.valor2 = "mid2";
	next();
};

//Não irá chamar o próximo passo
const passo3 = (contexto) => (contexto.valor3 = "mid3");

//...Middwares é um array com todas as funções/middwares
const exec = (contexto, ...middwares) => {
	const execMiddware = (indice) => {
		if (middwares && indice < middwares.length) {
			middwares[indice](contexto, () => {
				execMiddware(indice + 1);
			});
		}
	};

	execMiddware(0);
};

const contexto = {};
exec(contexto, passo2, passo1, passo3);
console.log(contexto);


/*
Isso que representa a função NEXT
() => {
    execMiddware(indice + 1);
});

*/