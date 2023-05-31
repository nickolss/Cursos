function resolverBhaskara(a, b, c) {
	let delta = b ** 2 - 4 * a * c;

	if (delta < 0) {
		return "Delta é negativo";
	} else {
		let x1 = ((-b + Math.sqrt(delta)) / 2) * a;
		let x2 = ((-b - Math.sqrt(delta)) / 2) * a;

		let resp = [x1, x2];
        return resp
	}
}

console.log(resolverBhaskara(1 , -1 , -6))