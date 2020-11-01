import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Map.module.css'
import Head from 'next/head'
import Notification from '../shared/notification'
import Grid from '@material-ui/core/Grid';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import Header from '../shared/header';

export default function Map() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alcatraz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <Grid container>
          <Grid item xs={8}>
            <Notification />
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <Link href="/">
              <a><DirectionsWalkIcon fontSize="large" /></a>
            </Link>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Grid container justify="center" alignItems="center" className={styles.iconBox}>
          <Image
            src="/mitarashi.png"
            width={50}
            height={50}
          />
        </Grid>
      </main>
    </div>
  )
}
