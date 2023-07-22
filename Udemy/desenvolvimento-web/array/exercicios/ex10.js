const simboloMais = num => {
    let resultado = ""
    for (let i = 0; i < num; i++) {
        resultado += "+"
    }

    return resultado
}

console.log(simboloMais(2))
console.log(simboloMais(4))