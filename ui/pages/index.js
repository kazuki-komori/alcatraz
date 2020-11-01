import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { getTestData } from '../lib/tests'

import Header from './shared/header';
import LinkIcons from './shared/linkIcons';

import MapIcon from '@material-ui/icons/Map';
import { green } from '@material-ui/core/colors'

// 疎通確認のコード
export async function getStaticProps() {
  const message = await getTestData()
  return {
    props: {
      message
    }
  }
}

function MapIconLink(){
  return (
    <Link href="/map">
      <a>
        <MapIcon
          style={{ color: green[500], fontSize: 50 }}
          className={styles.linkIcon}
        />
      </a>
    </Link>
  )
}

export default function Home() {
  const mapIconLink = MapIconLink();

  return (
    <div className={styles.container}>
      <Head>
        <title>Alcatraz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <LinkIcons uniqueIconLink={mapIconLink} />
        <div className={styles.iconBox}>
          <Image
            src="/mitarashi.png"
            width={100}
            height={100}
            className={styles.icon}
          />
        </div>
      </main>
    </div>
  )
}
