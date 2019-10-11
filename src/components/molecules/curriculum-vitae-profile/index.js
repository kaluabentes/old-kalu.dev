import React from 'react'
import PropTypes from 'prop-types'

import CurriculumVitaeSectionTitle from '_atoms/curriculum-vitae-section-title'
import styles from './styles.css'

const CurriculumVitaeProfile = ({ content }) => (
  <div className={styles.profile}>
    <CurriculumVitaeSectionTitle>Profile</CurriculumVitaeSectionTitle>
    <p className={styles.content}>
      {content}
    </p>
  </div>
)

CurriculumVitaeProfile.propTypes = {
  content: PropTypes.string,
}

CurriculumVitaeProfile.defaultProps = {
  content: '',
}

export default CurriculumVitaeProfile
