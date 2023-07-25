const menorNumero = (nums) => {
	let menorNum = nums[0];

	nums.forEach((element) => {
		if (element < menorNum) {
			menorNum = element;
		}
	});

	return menorNum;
};

console.log(menorNumero([10, 5, 35, 65]));
console.log(menorNumero([1, 15, 50, 3]));
