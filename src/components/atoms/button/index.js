import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const Button = ({
  onClick, children
}) => (
  <button className={styles.button} onClick={onClick} type="button">
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  router: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired
}

Button.defaultProps = {
  onClick: () => {},
}

export default Button
