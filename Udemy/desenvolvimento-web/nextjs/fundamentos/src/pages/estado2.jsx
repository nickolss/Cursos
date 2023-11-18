import Layout from "@/components/Layout"
import { useState } from "react"

function Estado2(){
    let [nome, setNome] = useState()

    function alterarNome(event){
        setNome(event.target.value)
    }

    return(
        <Layout titulo="Componente com estado #2">
            <label htmlFor="nome">Seu Nome</label>
            <input type="text" id="nome" onKeyUp={alterarNome}/>

            <div>
                {nome}
            </div>
        </Layout>
    )
}

export default Estado2