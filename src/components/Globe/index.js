

import styles from './style.module.scss';

export default function index() {
  return (

   <div className={styles.globeBall}  data-scroll data-scroll-speed={ -0.4}>
    <div className={styles.overlay}></div>
        <div className={styles.globe}>
            <div className={styles.globeWrap}>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circle}></div>
                <div className={styles.circleHor}></div>
                <div className={styles.circleHorMiddle}></div>
            </div>
        </div>
    </div>
  )
}