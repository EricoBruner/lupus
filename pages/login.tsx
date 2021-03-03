import Link from 'next/link';
import router from 'next/router'

export default function Login() {

    function login() {
        const value = document.getElementById('login').value

        if( value == 1 ) {
            return router.push('/');
        }

        alert('Login incorreto')
    }

    return (
        <div>
            Você ta no Login
            <br/><br/>login
            <input id="login" type="text"/>

            <button type="button" onClick={login}>Logar</button>


            <Link href="/">
                <p>Voltar para Home</p>
            </Link>
        </div>
    )
}