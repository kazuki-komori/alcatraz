import Link from 'next/link'
import styles from '../../styles/Map.module.css'

export default function Map() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>トップに戻る</a>
      </Link>
    </div>
  )
}
