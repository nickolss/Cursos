function handler(req, resp){
    resp.status(200).json({
        name: "teste api",
        metodo: req.method,
        params: JSON.stringify(req.query),
        nome: req.query.nome,
        idade: +req.query.idade  //Esse + serve para transformar em número
    })
}  

export default handler