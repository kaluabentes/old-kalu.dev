import React from 'react'
import PropTypes from 'prop-types'

import Section from '_molecules/section'
import SectionTitle from '_atoms/section-title'
import Paper from '_atoms/paper'
import styles from './styles.css'

const ResumeProfile = ({ content, hasPadding }) => (
  <Section>
    <Paper hasPadding={hasPadding}>
      <SectionTitle>Bio</SectionTitle>
      <p className={styles.content}>
        {content}
      </p>
    </Paper>
  </Section>
)

ResumeProfile.propTypes = {
  content: PropTypes.string,
  hasPadding: PropTypes.bool,
}

ResumeProfile.defaultProps = {
  content: '',
  hasPadding: true,
}

export default ResumeProfile
