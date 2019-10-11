import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const AddButton = ({ onClick, children }) => (
  <button className={styles.button} type="button" onClick={onClick}>
    <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="13 11 17 11 17 13 13 13 13 17 11 17 11 13 7 13 7 11 11 11 11 7 13 7" /></svg>
    {children}
  </button>
)

AddButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

AddButton.defaultProps = {
  onClick: () => {},
}

export default AddButton
