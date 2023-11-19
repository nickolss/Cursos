function handler(req, resp){
    resp.status(200).json({
        id: req.query.codigo,
        nome: `João ${req.query.codigo}`,
        email: `joao${req.query.codigo}@xyz.com`
    })
}

export default handler