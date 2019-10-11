import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const Toggler = ({ onClick, isActive }) => (
  <button
    className={classNames(styles.toggler, { [styles.togglerActive]: isActive })}
    type="button"
    onClick={onClick}
  >
    <div className={styles.needle} />
  </button>
)

Toggler.propTypes = {
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
}

Toggler.defaultProps = {
  onClick: PropTypes.func,
  isActive: false,
}

export default Toggler
