import express from 'express';
import bodyparser from 'body-parser';

const app = express();
app.use(express.static("."));
app.use(bodyparser.urlencoded({ extended: true })); //Qualquer requisição que chegar será transformada para ter um "corpo"
app.use(bodyparser.json());

app.get("/teste", (req, resp, next) => {
	resp.send("OK");
});

app.listen(8081, () => console.log("Executando Server"));
