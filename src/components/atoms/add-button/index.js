import React from 'react'
import PropTypes from 'prop-types'

import AddIcon from '_atoms/icon/add'
import styles from './styles.css'

const AddButton = ({ onClick, children }) => (
  <button className={styles.button} type="button" onClick={onClick}>
    <AddIcon />
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
