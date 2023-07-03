const pai = {
	nome: "Caio",
	corCabelo: "Preto",
};

const filha1 = Object.create(pai);
filha1.nome = "Ana";
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
	nome: {
		enumerable: true,
		writable: false,
		value: "Bianca",
	},
});

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let chave in filha2){
    //O método hasOwnProperty verifica se o atributo é do próprio objeto(retorna TRUE) ou é herdado(retorna FALSE)
    if(filha2.hasOwnProperty(chave)){
        console.log(chave)
    }else{
        console.log(`Por herança: ${chave}`)
    }
}