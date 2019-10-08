import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const CoverSubtitle = ({ children }) => <p className={styles.subtitle}>{children}</p>

CoverSubtitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CoverSubtitle
