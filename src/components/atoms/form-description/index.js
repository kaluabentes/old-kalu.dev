import React from 'react'
import PropTypes from 'prop-types'

import styles from '_atoms/input/styles.css'

const FormDescrition = ({ children }) => <p className={styles.label}>{children}</p>

FormDescrition.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FormDescrition
