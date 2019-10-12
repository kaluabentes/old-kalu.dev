import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const ResumeHeader = ({
  photo,
  name,
  jobTitle,
}) => (
  <header className={styles.header}>
    <img className={styles.photo} src={photo} alt={name} />
    <div className={styles.titleGroup}>
      <h3 className={styles.title}>{name}</h3>
      <h4 className={styles.subtitle}>{jobTitle}</h4>
    </div>
  </header>
)

ResumeHeader.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  jobTitle: PropTypes.string,
}

ResumeHeader.defaultProps = {
  photo: '',
  name: '',
  jobTitle: '',
}

export default ResumeHeader
