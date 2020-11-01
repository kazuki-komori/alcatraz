import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getTestData } from '../lib/tests'
import MapIcon from '@material-ui/icons/Map';
import Notification from './shared/notification'
import { Grid } from '@material-ui/core'

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
        <Path />
      </main>

    </div>
  )
}
