import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const SectionTitle = ({ children }) => <h3 className={styles.title}>{children}</h3>

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SectionTitle
