import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.css'

const ResumeHeader = ({
  photo,
  name,
  jobTitle,
  isExportable,
}) => (
  <header
    className={
      classnames(
        styles.header,
        { [styles.exportable]: isExportable }
      )
    }
  >
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
  isExportable: PropTypes.bool,
}

ResumeHeader.defaultProps = {
  photo: '',
  name: '',
  jobTitle: '',
  isExportable: false,
}

export default ResumeHeader
