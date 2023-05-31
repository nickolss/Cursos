function rand({ min = 0, max = 1000 }) { //Os valores padrões são 0 pro MIN e 1000 pro MAX
	if(min > max){
		[min , max] = [max , min]
	}else{
		const valor = Math.random() * (max - min) + min;
		return Math.floor(valor);
	}
}

const numero = {
	min: 50,
	max: 800,
};

console.log(rand(numero));

//OU

console.log(rand({ min: 50, max: 500 })); //Aqui está criando um objeto com essas duas chaves e valores
