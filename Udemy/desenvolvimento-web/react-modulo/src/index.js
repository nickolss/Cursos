import React from "react";
import ReactDOM from "react-dom";
// import PrimeiroComponente from "./componentes/Primeiro.jsx";
// import BomDia from "./componentes/BomDia.jsx" 
// const elemento = <h1>React</h1>

// import {BoaTarde, BoaNoite} from './componentes/Multiplos.jsx';
import Saudacao from './componentes/Saudacao.jsx'

ReactDOM.render(
    <div>
        <Saudacao tipo="Bom dia" nome='João' />
    </div>,
    document.querySelector("#root")
)
