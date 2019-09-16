import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const SIZES = {
  small: styles.sizeSmall,
  medium: styles.sizeMedium,
}

const THEMES = {
  light: styles.themeLight,
  dark: styles.themeDark,
}

const getClassName = props => ({
  className: classNames(styles.brand, props.size, props.theme),
})

const Brand = ({ isTitle, ...props }) =>
  isTitle ? <h1 {...getClassName(props)}>KALUX</h1> : <h4 {...getClassName(props)}>KALUX</h4>

Brand.propTypes = {
  isTitle: PropTypes.bool,
  size: PropTypes.string,
  theme: PropTypes.string,
}

Brand.defaultProps = {
  isTitle: true,
  size: SIZES.small,
  theme: THEMES.light,
}

Brand.sizes = SIZES
Brand.themes = THEMES

export default Brand
