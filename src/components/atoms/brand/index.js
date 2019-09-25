import React from 'react'
import Link from 'next/link'

import styles from './styles.css'

const Brand = () => (
  <Link href="/">
    <div className={styles.brand}>K</div>
  </Link>
)

export default Brand
