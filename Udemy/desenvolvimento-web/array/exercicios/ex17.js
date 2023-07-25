const somarNumeros = (nums) => {
	return nums.reduce((num, total) => (total += num));
};

console.log(somarNumeros([10, 10, 10]));
console.log(somarNumeros([15, 15, 15, 15]));
