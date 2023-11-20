import Layout from "@/components/Layout";

export function getServerSideProps(){
    return{
        props:{
            num: Math.random()
        }
    }
}

function Integracao1(props) {
	return (
		<Layout titulo="Conteúdo Estático">
			<div>
                {props.num}
            </div>
		</Layout>
	);
}

export default Integracao1;
