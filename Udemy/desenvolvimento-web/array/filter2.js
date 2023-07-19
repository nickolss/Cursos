Array.prototype.filter2 = function(callback){
    const novoArray = []
    
    for(let i = 0; i < this.length; i++){
        if(callback(this[i] , i , this)){
            novoArray.push(this[i])
        }
    }

    return novoArray
}

const produtos = [
	{
		nome: "notebook",
		preco: 2599.99,
		fragil: true,
	},
	{
		nome: "ipad pro",
		preco: 7500.0,
		fragil: true,
	},
	{
		nome: "copo de vidro",
		preco: 12.99,
		fragil: true,
	},
	{
		nome: "copo de plástico",
		preco: 10.99,
		fragil: false,
	},
];

const produtoFragil = (elemento) => elemento.fragil;
const produtoCaro = (elemento) => elemento.preco >= 500;

console.log(produtos.filter2(produtoFragil).filter2(produtoCaro));
