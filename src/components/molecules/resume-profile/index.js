import React from 'react'
import PropTypes from 'prop-types'

import Section from '_molecules/section'
import SectionTitle from '_atoms/section-title'
import Paper from '_atoms/paper'
import styles from './styles.css'

const ResumeProfile = ({ content, isExportable }) => (
  <Section>
    <Paper hasPadding={!isExportable}>
      <SectionTitle>Bio</SectionTitle>
      <p className={styles.content}>
        {content}
      </p>
    </Paper>
  </Section>
)

ResumeProfile.propTypes = {
  content: PropTypes.string,
  isExportable: PropTypes.bool,
}

ResumeProfile.defaultProps = {
  content: '',
  isExportable: false,
}

export default ResumeProfile
