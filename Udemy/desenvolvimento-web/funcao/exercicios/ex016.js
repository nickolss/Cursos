function calculadora(num1, num2, operacaoDesejada) {
	switch (operacaoDesejada) {
		case "+":
			return num1 + num2; 
			break

		case "-":
			return num1 - num2;
			break
    
		case "*":
			return num1 * num2;
			break

		case "/":
			return num1 / num2;
			break

		default:
			return "Operação Inválida";
	}
}

console.log(calculadora(10, 5 , "+"))
console.log(calculadora(10, 5 , "-"))
console.log(calculadora(10, 5 , "*"))
console.log(calculadora(10, 5 , "/"))
console.log(calculadora(10, 5 , "a"))