import React from "react";
import styles from "./Close.module.css"

const Close = ({...props}) => {
  return (
    <div {...props} className={styles.close}>
      <span className={styles.closeItem}></span>
      <span className={styles.closeItem}></span>
    </div>
  )
}

export default Close;