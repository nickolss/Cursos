import React from "react";

export default (props)=>{
  /*
  return(
    <React.fragment>
      <h1>Bom dia, {props.nome}</h1>
      <h2>Até breve!</h2>
    </React.fragment>
  )
  */

  return(
    [
      <h1 key='h1'>Bom dia, {props.nome}</h1>,
      <h2 key='h2'>Até breve!</h2>
    ]
  )
}
