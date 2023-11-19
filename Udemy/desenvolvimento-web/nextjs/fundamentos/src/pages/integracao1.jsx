import Layout from "@/components/Layout";
import { useState } from "react";

function Integracao1() {
	const [codigo, setCodigo] = useState(1);
	const [cliente, setCliente] = useState({});

	async function obterCliente() {
		const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
        const data = await resp.json()

        setCliente(data)
	}

	return (
		<Layout titulo="Integração com API 1">
			<div>
				<input
					type="number"
					value={codigo}
					onChange={(event) => {
						setCodigo(event.target.value);
					}}
				/>
				<button onClick={obterCliente}>Obter Cliente</button>
			</div>
			<ul>
				<li>Código: {cliente.id}</li>
				<li>Nome: {cliente.nome}</li>
				<li>Email: {cliente.email}</li>
			</ul>
		</Layout>
	);
}

export default Integracao1;
