import Head from "next/head";

import styles from '../styles/pages/index.module.css'

import Login from '../components/Login'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        Login | lupus
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;1,300&display=swap" rel="stylesheet"/>
      </Head>

      <section>
        <div>
          <img src="logo.svg" alt="Lupus" />
        </div>
        <div>
          <Login />
        </div>
      </section>
    </div>
  )
}
