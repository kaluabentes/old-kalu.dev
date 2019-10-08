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
    <div className={classNames(styles.brand, theme)}>Kalux</div>
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
