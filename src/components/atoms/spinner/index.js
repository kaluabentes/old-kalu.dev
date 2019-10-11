import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const SIZES = {
  large: styles.large,
  small: styles.small,
}

const Spinner = ({ size, className }) => (
  <div className={classNames(styles.spinner, className, size)}>
    <div className={styles.thinCircle} />
    <div className={styles.innerCircle} />
  </div>
)

Spinner.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

Spinner.defaultProps = {
  className: undefined,
  size: SIZES.large,
}

Spinner.sizes = SIZES

export default Spinner
