import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Map.module.css'
import Head from 'next/head'
import Grid from '@material-ui/core/Grid';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import Header from '../shared/header';
import { green } from '@material-ui/core/colors'
import LinkIcons from '../shared/linkIcons';

function WalkIconLink(){
  return (
    <Link href="/">
      <a>
        <DirectionsWalkIcon
          style={{ color: green[500], fontSize: 50 }}
          className={styles.linkIcon}
        />
      </a>
    </Link>
  )
}

export default function Map() {
  const walkIconLink = WalkIconLink();

  return (
    <div className={styles.container}>
      <Head>
        <title>Alcatraz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <LinkIcons uniqueIconLink={walkIconLink} />
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
