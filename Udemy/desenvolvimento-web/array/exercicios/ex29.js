const segundoMaior = (nums) => {
	const ordenados = nums.sort(function (a, b) {
		return b - a;
	});

	return ordenados[1];
};

console.log(segundoMaior([12, 16, 1, 5]));
console.log(segundoMaior([8, 4, 5, 6]));
