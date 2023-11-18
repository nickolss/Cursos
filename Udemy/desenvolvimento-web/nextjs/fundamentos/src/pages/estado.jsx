import Layout from "@/components/Layout"
import { useState } from "react"

function Estado(props){
    let [num, setNumero] = useState(0)

    function incrementar(){
        setNumero(num + 1)
    }

    return(
        <Layout titulo="Componente com estado">
            <div>{num}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}

export default Estado