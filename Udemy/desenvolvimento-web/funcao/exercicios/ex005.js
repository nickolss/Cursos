function formatarNumeros(num){
    valorFormatado = `R$ ${num.toFixed(2).toString().replace("." , ",")}`
    return valorFormatado
}

console.log(formatarNumeros(55555.78451))
