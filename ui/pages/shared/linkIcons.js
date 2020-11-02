import Link from 'next/link'

import styles from '../../styles/LinkIcons.module.scss'

import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import { yellow, green } from '@material-ui/core/colors'
import { Box } from '@material-ui/core';
import MapIcon from '@material-ui/icons/Map';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';

export function MapIconLink(){
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

export function WalkIconLink(){
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

export function LinkIcons(props){
  return(
    <Box className={styles.linkIconBox}>
      <div className={styles.linkIconWrapper}>
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
      <div className={styles.linkIconWrapper}>
        { props.uniqueIconLink }
      </div>
    </Box>
  )
}
