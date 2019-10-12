import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const Timeline = ({ children }) => <ul className={styles.timeline}>{children}</ul>

Timeline.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Timeline
