import React from 'react'
import PropTypes from 'prop-types'

import CurriculumVitaeHeader from '_molecules/curriculum-vitae-header'
import CurriculumVitaeProfile from '_molecules/curriculum-vitae-profile'
import CurriculumVitaeSectionTitle from '_atoms/curriculum-vitae-section-title'
import Timeline from '_molecules/timeline'
import TimelineItem from '_atoms/timeline-item'

import styles from './styles.css'

const CurriculumVitae = ({
  photo,
  name,
  jobTitle,
  professionalSummary,
  employments
}) => (
  <article>
    <CurriculumVitaeHeader
      photo={photo}
      name={name}
      jobTitle={jobTitle}
    />
    <div className={styles.grid}>
      <div>
        <CurriculumVitaeProfile
          content={professionalSummary}
        />
        <CurriculumVitaeSectionTitle>
          Employment History
        </CurriculumVitaeSectionTitle>
        <Timeline>
          {employments.map((employment) => {
            const [, year] = employment.startDate.split(',').map((str) => str.trim())

            return (
              <TimelineItem
                title={`${employment.jobTitle} at ${employment.employer}, ${employment.city}`}
                subtitle={`${employment.startDate} — ${employment.endDate}`}
                description={employment.description}
                year={year}
              />
            )
          })}
        </Timeline>
      </div>
    </div>
  </article>
)

CurriculumVitae.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  jobTitle: PropTypes.string,
  professionalSummary: PropTypes.string,
  employments: PropTypes.instanceOf(Array),
}

CurriculumVitae.defaultProps = {
  photo: '',
  name: '',
  jobTitle: '',
  professionalSummary: '',
  employments: [],
}

export default CurriculumVitae
