let precoProduto = 19.9;
let desconto = 0.4;
let precoComDesconto = precoProduto * (1 - desconto);

console.log(precoComDesconto);

let nomeProduto = "Caderno";
let categoria = "Papelaria";

console.log(
	`Produto: ${nomeProduto},
    Categoria: ${categoria},
    Preço: ${precoProduto},
    Preco com Desconto: ${precoComDesconto}`
);
