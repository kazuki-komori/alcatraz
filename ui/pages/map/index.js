import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Map.module.css'
import Head from 'next/head'
import Notification from '../shared/notification'
import Grid from '@material-ui/core/Grid';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';

export default function Map() {
  return (
    <div>
      <Head>
        <title>Alcatraz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Grid container className={styles.links}>
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
