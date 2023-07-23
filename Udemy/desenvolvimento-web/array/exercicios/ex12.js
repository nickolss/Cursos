const removerPropriedade = (objeto , atributo) => {
    delete objeto[atributo]

    return objeto
}

console.log(removerPropriedade({a: 1 , b: 2} , "a"))

console.log(removerPropriedade({
    id: 20,
    nome: "Caneta",
    descricao: "Não preenchida"
} , "descricao"))


console.log(Object.is(removerPropriedade(removerPropriedade({
    id: 20,
    nome: "Caneta",
    descricao: "Não preenchida"
} , "descricao") , {
    id: 20,
    nome: "Caneta",
    descricao: "Não preenchida"
})))