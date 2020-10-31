import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getTestData } from '../lib/tests'

export async function getStaticProps() {
  const message = await getTestData()
  return {
    props: {
      message
    }
  }
}

function Path() {
  return (
    <div className={styles.path}>
      <Image
        src="/mitarashi.png"
        width={100}
        height={100}
        className={styles.icon}
      />
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alcatraz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Alcatraz
        </h1>
        <Link href="/map">
          <a>マップ画面へ</a>
        </Link>
        <Path />
      </main>

    </div>
  )
}
