const banco = require("./bancoDados");
const express = require("express");
const bodyParser = require("body-parser");

const porta = 3003;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

//Colocando /produtos, só irá obter a response se puxar essa pasta
app.get("/produtos", (req, res, next) => {
	res.send(banco.getProdutos());
});

app.get("/produtos/:id", (req, res, next) => {
	res.send(banco.getProduto(req.params.id));
});

app.post("/produtos", (req, res, next) => {
	const produto = banco.salvarProduto({
		nome: req.body.name,
		preco: req.body.preco,
	});
	res.send(produto);
});

app.put("/produtos/:id", (req, res, next) => {
	const produto = banco.salvarProduto({
		id: req.params.id,
		nome: req.body.name,
		preco: req.body.preco,
	});
	res.send(produto);
});

app.delete("/produto/:id", (req, res, next) => {
	const produto = banco.excluirProduto(req.params.id);
	res.send(produto);
});

//Independendo da url depois do http://localhost:3003/QUALQUER-COISA, irá retornar a response
// app.use((require, response, next) => {
// 	response.send("ISSO É UM USE USANDO EXPRESS");
// });

app.listen(porta, () => {
	console.log(`Servidor executando na porta ${porta}`);
});
