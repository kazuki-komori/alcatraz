import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Map.module.css'
import Head from 'next/head'
import Notification from './notification'

export default function Map() {
  return (
    <div>
      <Head>
        <title>Alcatraz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.links}>
          <Notification />
          <Link href="/">
            <a>トップに戻る</a>
          </Link>
        </div>
        <div className={styles.icons}>
          <Image
            src="/mitarashi.png"
            width={50}
            height={50}
          />
        </div>
      </main>
    </div>
  )
}
