import React from 'react'
import PropTypes from 'prop-types'

import Section from '_molecules/section'
import SectionTitle from '_atoms/section-title'
import styles from './styles.css'

const CurriculumProfile = ({ content }) => (
  <Section>
    <SectionTitle>Profile</SectionTitle>
    <p className={styles.content}>
      {content}
    </p>
  </Section>
)

CurriculumProfile.propTypes = {
  content: PropTypes.string,
}

CurriculumProfile.defaultProps = {
  content: '',
}

export default CurriculumProfile
