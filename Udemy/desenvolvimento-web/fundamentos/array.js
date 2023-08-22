const valores = [7.7 , 8.9, 9.2, 6.2]
console.log(valores)

valores.push(10, 5.8, ['João, Nickolas, Juliana']) //Adiciona valores ao final
console.log(valores)

valores.pop() //Tira o ultimo valor
delete valores[valores.length-1]
console.log(valores)
