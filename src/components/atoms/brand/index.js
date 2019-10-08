import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './styles.css'

const THEMES = {
  dark: styles.themeDark,
  light: styles.themeLight,
}

const Brand = ({ theme }) => (
  <Link href="/">
    <h1 className={classNames(styles.brand, theme)}>Kalux</h1>
  </Link>
)

Brand.propTypes = {
  theme: PropTypes.string,
}

Brand.defaultProps = {
  theme: THEMES.dark,
}

Brand.themes = THEMES

export default Brand
