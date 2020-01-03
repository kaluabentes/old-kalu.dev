import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Button from '_atoms/button'

import styles from './styles.css'

const ResumeHeader = ({ photo, name, jobTitle, isExportable, onDownloadClick }) => (
  <header className={classnames(styles.header, { [styles.exportable]: isExportable })}>
    <img className={styles.photo} src={photo} alt={name} />
    <h3 className={styles.title}>{name}</h3>
    <h4 className={styles.subtitle}>{jobTitle}</h4>
    <div className={styles.downloadButtonContainer}>
      <Button onClick={onDownloadClick}>Download PDF</Button>
    </div>
  </header>
)

ResumeHeader.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  jobTitle: PropTypes.string,
  isExportable: PropTypes.bool,
  onDownloadClick: PropTypes.func,
}

ResumeHeader.defaultProps = {
  photo: '',
  name: '',
  jobTitle: '',
  isExportable: false,
  onDownloadClick: () => {},
}

export default ResumeHeader
