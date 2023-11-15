import Link from "next/link";
import styles from "../styles/Layout.module.css";

function Layout(props) {
	return (
		<div className={styles.layout}>
			<div className={styles.cabecalho}>
				<h1>{props.titulo ?? "Titulo padrão"}</h1>
				<Link href="/">Voltar</Link>
			</div>

			<div className={styles.conteudo}>{props.children}</div>
		</div>
	);
}

export default Layout;
