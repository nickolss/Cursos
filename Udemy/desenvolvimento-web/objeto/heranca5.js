console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

//Isso irá criar o método para todas as Strings
String.prototype.reverterString = function () {
	return this.split("").reverse().join("");
};

console.log("nickolas maia".reverterString());


Array.prototype.pegarPrimeiroElemento = function(){
    return this[0]
}

console.log([1 , 5 , 70].pegarPrimeiroElemento())