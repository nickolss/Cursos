function caLcularFatorial(num) {
	if (num == 0) {
		return 1;
	} else {
		return num * caLcularFatorial(num - 1); //Fatorial de num * fatorial de num - 1
	}
}
console.log(caLcularFatorial(5))