const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/usuarios", (req, resp, next) => {
	console.log(req.body);
	resp.send("Parabéns. Usuário Incluido!")
});

app.post("/usuarios/:id", (req, resp, next) => {
	console.log(req.params.id);
	console.log(req.body);

    resp.send("Parabéns. Usuário alterado!")
});

app.listen(5500);
