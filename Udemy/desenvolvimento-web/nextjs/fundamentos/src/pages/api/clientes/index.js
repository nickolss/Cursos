function handler(req, resp){
    if(req.method === "GET"){
        resp.status(200).json({
            id: 1,
            nome: "João",
            idade: 18
        })
    }

    resp.status(405).send("Método não suportado")
}

export default handler