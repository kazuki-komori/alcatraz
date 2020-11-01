import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getTestData } from '../lib/tests'

import Grid from '@material-ui/core/Grid';
import MapIcon from '@material-ui/icons/Map';
import Notification from './shared/notification'
import Header from './shared/header';

// 疎通確認のコード
export async function getStaticProps() {
  const message = await getTestData()
  return {
    props: {
      message
    }
  }
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alcatraz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Grid container className={styles.links}>
          <Grid item xs={8}>
            <Notification />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <Link href="/map">
              <a><MapIcon fontSize="large" /></a>
            </Link>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
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
