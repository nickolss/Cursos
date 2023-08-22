function tratarErroELancar(erro){
    // throw new Error("Algo deu errado")
    // throw 10
    // throw "Deu erro meu bom"
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date()
    }
}

function imprimirNomeGritado(obj) {
	try {
        console.log(obj.name.toUpperCase() + "!!!");
    } catch (error) {
        tratarErroELancar(error)
    }
}

const obj = {
	nome: "Nickolas",
};

imprimirNomeGritado(obj);
