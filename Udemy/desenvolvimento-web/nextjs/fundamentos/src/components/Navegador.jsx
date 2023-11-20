import Link from "next/link"
import styles from "../styles/Navegador.module.css"

function Navegador(props){
    return(
        <Link href={props.link} passHref>
            <div className={styles.navegador} style={{
                backgroundColor: props.cor ?? '#1e90ff'
            }}>
                {props.texto}
            </div>
        </Link>
    )
}

export default Navegador