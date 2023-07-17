const carrinho = [
    '{"nome": "Borracha" , "preco": 3.45}',
    '{"nome": "Caderno" , "preco": 13.90}',
    '{"nome": "Kit de Lápis" , "preco": 35.99}',
    '{"nome": "Caneta" , "preco": 4.99}',
];

const converteParaObjeto = (elemento) => JSON.parse(elemento)
const precoProduto = (elemento) => elemento.preco

const precos = carrinho.map(converteParaObjeto).map(precoProduto)
console.log(precos)

