import styles from '../styles/components/Login.module.css'

export default function Login() {
    return (
        <div className={styles.container}>
            <h1>LUPUS</h1>
            <p>Bem-vindo</p>
            <div>
                <input type="text"/>
                <button type="button">Login</button>
            </div>
        </div>
    )
}