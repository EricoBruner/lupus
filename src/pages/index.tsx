import Head from "next/head";

import styles from '../styles/pages/index.module.css'

import Login from '../components/Login'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        Login | lupus
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
