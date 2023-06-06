function numerosEntreDezeVinte(numeros) {
  let numerosDentroDoIntervalo = 0;
  let numerosFora = 0;

  for (let i in numeros) {
    if (numeros[i] >= 10 && numeros[i] <= 20) {
      numerosDentroDoIntervalo++;
    } else {
      numerosFora++;
    }
  }

  return [numerosDentroDoIntervalo, numerosFora];
}

console.log(numerosEntreDezeVinte([10, 25, 2, 12, 15, 9]));
