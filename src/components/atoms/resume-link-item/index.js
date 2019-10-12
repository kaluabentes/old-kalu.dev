import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const ResumeLinkItem = ({ label, url }) => (
  <div className={styles.item}>
    <div className={styles.label}>{label}</div>
    <a
      href={url}
      className={styles.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {url}
    </a>
  </div>
)

ResumeLinkItem.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
}

ResumeLinkItem.defaultProps = {
  label: '',
  url: '',
}

export default ResumeLinkItem
