function rand([min = 0, max = 1000]) {
	if (min > max) {
		[min, max] = [max, min]; //Inverte as variáveis. O min virá o máximo e o máximo vira o min
	}
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
	
}

console.log(rand([50, 40]));

console.log(rand([, 40])); //O 40 é o MAX e o MIN fica default