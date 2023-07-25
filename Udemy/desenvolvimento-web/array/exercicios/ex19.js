const calcularMedia = (nums) => {
	const soma = (total, num) => total + num;
	return nums.reduce(soma) / nums.length;
};

console.log(calcularMedia([0, 10]));
console.log(calcularMedia([1, 2, 3, 4, 5]));
