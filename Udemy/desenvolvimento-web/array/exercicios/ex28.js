const filtrartamanhoDesejadoPorDigitos = (nums, tamanhoDesejado) => {
	return nums.filter((numero) => {
		const digitos = String(numero).length;

		return digitos === tamanhoDesejado;
	});
};

console.log(filtrartamanhoDesejadoPorDigitos([38, 2, 365, 10, 125, 11], 2));
console.log(filtrartamanhoDesejadoPorDigitos([5, 7 , 1 , 125, 11] , 1));
