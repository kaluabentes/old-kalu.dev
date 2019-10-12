import React from 'react'
import PropTypes from 'prop-types'

import CurriculumHeader from '_molecules/curriculum-header'
import CurriculumProfile from '_molecules/curriculum-profile'
import Timeline from '_molecules/timeline'
import TimelineItem from '_atoms/timeline-item'
import Section from '_molecules/section'
import SectionTitle from '_atoms/section-title'
import WhatsappIcon from '_atoms/icon/whatsapp'
import EmailIcon from '_atoms/icon/email'
import MarkerIcon from '_atoms/icon/marker'
import DetailItem from '_atoms/detail-item'

import styles from './styles.css'

const Curriculum = ({
  photo,
  name,
  jobTitle,
  phone,
  email,
  address,
  professionalSummary,
  employments,
  educations,
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
        <Section>
          <SectionTitle>
            Education
          </SectionTitle>
          <Timeline>
            {educations.map((education) => {
              const [, year] = education.startDate.split(',').map((str) => str.trim())

              return (
                <TimelineItem
                  title={`${education.degree} at ${education.school}, ${education.city}`}
                  subtitle={`${education.startDate} — ${education.endDate}`}
                  description={education.description}
                  year={year}
                />
              )
            })}
          </Timeline>
        </Section>
      </div>
      <div className={styles.columnRight}>
        <Section>
          <SectionTitle>Details</SectionTitle>
          <DetailItem
            icon={<WhatsappIcon />}
            text={phone}
          />
          <DetailItem
            icon={<EmailIcon />}
            text={email}
          />
          <DetailItem
            icon={<MarkerIcon />}
            text={address}
          />
        </Section>
        <Section>
          <SectionTitle>Links</SectionTitle>
        </Section>
        <Section>
          <SectionTitle>Skills</SectionTitle>
        </Section>
      </div>
    </div>
  </article>
)

Curriculum.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  jobTitle: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.string,
  professionalSummary: PropTypes.string,
  employments: PropTypes.instanceOf(Array),
  educations: PropTypes.instanceOf(Array),
}

Curriculum.defaultProps = {
  photo: '',
  name: '',
  jobTitle: '',
  phone: '',
  email: '',
  address: '',
  professionalSummary: '',
  employments: [],
  educations: [],
}

export default Curriculum
