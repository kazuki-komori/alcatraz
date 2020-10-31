import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getTestData } from '../lib/tests'

export async function getStaticProps(){
  const message = await getTestData()
  return {
    props: {
      message
    }
  }
}

export default function Home({ message }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alcatraz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Alcatraz
        </h1>

        <Image
          src="/path.jpg"
          width={500}
          height={500}
        />
        <h1>{ message }</h1>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
