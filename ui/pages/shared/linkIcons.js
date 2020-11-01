import Link from 'next/link'

import styles from '../../styles/LinkIcons.module.css'

import Grid from '@material-ui/core/Grid';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import { yellow } from '@material-ui/core/colors'

export default function LinkIcons(props){

  return(
    <Grid container>
      <Grid item xs={10}>
      </Grid>
      <Grid item xs={2}>
        <div className={styles.linkIconBox}>
          <Link href="#">
            <a>
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon
                  style={{ color: yellow[700], fontSize: 50 }}
                  className={styles.linkIcon}
                />
              </Badge>
            </a>      
          </Link>
        </div>
        <div className={styles.linkIconBox}>
          { props.uniqueIconLink }
        </div>
      </Grid>
    </Grid>
  )
}
