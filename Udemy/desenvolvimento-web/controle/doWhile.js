function getInteiroAleatorio(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

let opcao = 0

do{
    opcao = getInteiroAleatorio(-1 , 10)
    console.log(opcao)
}while(opcao != -1)

