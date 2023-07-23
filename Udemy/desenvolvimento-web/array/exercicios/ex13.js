const filtrarNumeros = (array) => {
    let resultado = []
    array.forEach(element => {
        if(typeof element == "number"){
            resultado.push(element)
        }
    });

    return resultado
}

console.log(filtrarNumeros([5 , 1 , "ola" , "10"]))
console.log(filtrarNumeros(["a" , "c"]))