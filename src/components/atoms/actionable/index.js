import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const Actionable = ({ children, onClick }) => (
  <button className={styles.actionable} type="button" onClick={onClick}>
    {children}
  </button>
)

Actionable.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

Actionable.defaultProps = {
  onClick: () => {},
}

export default Actionable
