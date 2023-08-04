const banco = require("./bancoDados");

const porta = 3003;
const express = require("express");
const app = express();

//Colocando /produtos, só irá obter a response se puxar essa pasta
app.get("/produtos", (req, res, next) => {
	res.send(banco.getProdutos());
});

app.get("/produtos/id:", (req, res, next) => {
	res.send(banco.getProduto(req.params.id));
});

app.post("/produtos", (req, res, next) => {
	const produto = banco.salvarProduto({
		nome: req.body.name,
		preco: req.body.preco,
	});
    res.send(produto)
});

//Independendo da url depois do http://localhost:3003/QUALQUER COISA, irá retornar a response
// app.use((require, response, next) => {
// 	response.send("ISSO É UM USE USANDO EXPRESS");
// });

app.listen(porta, () => {
	console.log(`Servidor executando na porta ${porta}`);
});
