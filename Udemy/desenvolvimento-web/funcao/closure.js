//Closure é o escopo criado quando a função é declarada
//Cin esse closure, a função consegue manipular e acessar variáveis exteriores a ela

const x = "global"

function fora(){
    const x = "Local"
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())