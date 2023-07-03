const sequencia = {
	_valor: 1, //Convenção para as variáveis PRIVADAS
	get valor() {
		return this._valor++;
	},
	set valor(valor) {
		if(valor > this._valor){
            this._valor = valor //Só permite o set se o valor passado é maior que o valor anterior
        }
	}
};

console.log(sequencia.valor , sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor , sequencia.valor)
sequencia.valor = 900 //Não irá fazer a atribuição porque 900 é menor que 1000