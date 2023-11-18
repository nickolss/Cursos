import Cabecalho from "@/components/Cabecalho";
import Layout from "@/components/Layout";

function Exemplo(){
    return(
        <Layout titulo="Usando componentes com Next.js e React">
            <Cabecalho titulo="Aprenda Next.js e React" />
            <Cabecalho titulo="Legal" />
        </Layout>
    )
}

export default Exemplo