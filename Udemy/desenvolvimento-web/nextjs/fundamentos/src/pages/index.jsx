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
		</div>
	);
}

export default Home;
