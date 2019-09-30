import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const SectionTitle = ({ children }) => <h2 className={styles.title}>{children}</h2>

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SectionTitle
