import React from 'react'
import PropTypes from 'prop-types'

import Section from '_molecules/section'
import SectionTitle from '_atoms/section-title'
import styles from './styles.css'

const ResumeProfile = ({ content }) => (
  <Section>
    <SectionTitle>Bio</SectionTitle>
    <p className={styles.content}>
      {content}
    </p>
  </Section>
)

ResumeProfile.propTypes = {
  content: PropTypes.string,
}

ResumeProfile.defaultProps = {
  content: '',
}

export default ResumeProfile
