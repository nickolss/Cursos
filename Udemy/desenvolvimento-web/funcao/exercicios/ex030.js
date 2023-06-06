function verificaMaioreMenor(numeros) {
  let maiorValor = numeros[0];
  let menorValor = numeros[0];

  for (let i in numeros) {
    if (maiorValor < numeros[i]) {
      maiorValor = numeros[i];
    }

    if (menorValor > numeros[i]) {
      menorValor = numeros[i];
    }
  }

  return [maiorValor, menorValor];
}

console.log(verificaMaioreMenor([10, 9, 52, 12, 1, 45]));
