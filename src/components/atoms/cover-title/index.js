import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const CoverTitle = ({ children }) => <h2 className={styles.title}>{children}</h2>

CoverTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CoverTitle
