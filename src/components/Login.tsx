import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../styles/components/Login.module.css'

export default function Login() {
    return (
        <div className={styles.container}>
            <img src="lupus.svg" alt="Lupus"/>
            <h2>Bem-vindo</h2>
            <div className={styles.github}>
                <img src="github.svg" alt="Lupus"/>
                <p>Faça login com seu Github para começar <br/>ou entre como visitante</p>
            </div>
            <div className={styles.button}>
                <input type="text" placeholder="Digite seu nome"/>
                <button><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
            </div>
        </div>
    )
}