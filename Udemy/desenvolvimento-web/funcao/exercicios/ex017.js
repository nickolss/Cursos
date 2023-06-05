function calcularAumento(planoDeTrabalho , salario){
    let aumento = 0
    switch(planoDeTrabalho){
        case "A":
        case "a":
            aumento = salario * 0.10
            return salario + aumento
            break

        case "B":
        case "b":
            aumento = salario * 0.15
            return salario + aumento
            break

        case "C":
        case "c":
            aumento = salario * 0.20
            return salario + aumento
            break
    }
}

console.log(calcularAumento("a" , 1500))
console.log(calcularAumento("b" , 1500))
console.log(calcularAumento("c" , 1500))