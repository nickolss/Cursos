import Layout from "../components/Layout";
import styles from "../styles/Estiloso.module.css";

function Estiloso() {
	return (
		<Layout titulo="Exemplo de CSS Modularizado">
			<div className={styles.roxo}>
				<h1>Estilo Usando Modulos</h1>
			</div>
		</Layout>
	);
}

export default Estiloso;
