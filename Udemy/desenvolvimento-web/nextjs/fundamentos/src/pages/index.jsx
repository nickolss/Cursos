import Link from "next/link";
import Navegador from "../components/Navegador";

function Home() {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
                flexWrap: "wrap",
                height: "100vh"
			}}
		>
			<Navegador link="/estiloso" texto="Estiloso" />
			<Navegador link="/exemplo" texto="Exemplo" cor="#bbb"/>
			<Navegador link="/cliente/sp/1" texto="Navagação Dinâmica"/>
			<Navegador link="/estado" texto="Componente com Estado" cor="#88AA00"/>
			<Navegador link="/estado2" texto="Componente com Estado #2" cor="#FB1457"/>
			<Navegador link="/integracao1" texto="Integração com API"/>
			<Navegador link="/estatico" texto="Conteúdo Estático"/>
			<Navegador link="/dinamico" texto="Conteúdo Dinâmico"/>
		</div>
	);
}

export default Home;
