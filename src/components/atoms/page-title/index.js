import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const PageTitle = ({ children }) => <h2 className={styles.title}>{children}</h2>

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageTitle
