import React from 'react'
import PropTypes from 'prop-types'

import CurriculumHeader from '_molecules/curriculum-header'
import CurriculumProfile from '_molecules/curriculum-profile'
import Timeline from '_molecules/timeline'
import TimelineItem from '_atoms/timeline-item'
import Section from '_molecules/section'
import SectionTitle from '_atoms/section-title'

import styles from './styles.css'

const Curriculum = ({
  photo,
  name,
  jobTitle,
  professionalSummary,
  employments
}) => (
  <article>
    <CurriculumHeader
      photo={photo}
      name={name}
      jobTitle={jobTitle}
    />
    <div className={styles.grid}>
      <div>
        <CurriculumProfile
          content={professionalSummary}
        />
        <Section>
          <SectionTitle>
            Employment History
          </SectionTitle>
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
        </Section>
      </div>
    </div>
  </article>
)

Curriculum.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  jobTitle: PropTypes.string,
  professionalSummary: PropTypes.string,
  employments: PropTypes.instanceOf(Array),
}

Curriculum.defaultProps = {
  photo: '',
  name: '',
  jobTitle: '',
  professionalSummary: '',
  employments: [],
}

export default Curriculum
