import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const FormSection = ({ children, title }) => (
  <div className={styles.section}>
    <h3 className={styles.title}>{title}</h3>
    {children}
  </div>
)

FormSection.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

FormSection.defaultProps = {
  title: '',
}

export default FormSection
