import styles from '../../styles/Map.module.css'
import Head from 'next/head'
import Header from '../shared/header';
import { LinkIcons, WalkIconLink } from '../shared/linkIcons';

export default function Notifications() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Alcatraz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <LinkIcons uniqueIconLink={WalkIconLink()} />
      </main>
    </div>
  )
}
