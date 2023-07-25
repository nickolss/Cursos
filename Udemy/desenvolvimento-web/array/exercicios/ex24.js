const contarCaracter = (letra, frase) => frase.split(letra).length - 1;

console.log(contarCaracter("r" , "A sorte favorece os audazes"))
console.log(contarCaracter("c" , "Conhece-te a ti mesmo"))