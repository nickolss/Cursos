Array.prototype.forEach2 = function(funcaoCallback){
    for(let i = 0; i < this.length; i++){
        funcaoCallback(this[i] , i, this)
    }
}

const aprovados = ["Ana", "Bia", "Caio", "Jorge"];

aprovados.forEach2(function (nome, indice, proprioArray) {
	console.log(`${indice + 1} - ${nome}`);
    console.log(proprioArray)
});
