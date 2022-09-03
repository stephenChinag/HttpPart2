import React from 'react'
import styles from './Spinner.module.css'
const Spin=()=> {
  return (
   <div className={styles.bodyy}>
    <div className={styles.center}>
        <div className={styles.ring}></div>
        <span>loading..</span>

    </div>

   </div>
  )
}

export default Spin;
