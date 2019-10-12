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
import ResumeLinkItem from '_atoms/resume-link-item'

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
  links,
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
            {employments.map((employment) => (
              <TimelineItem
                title={`${employment.jobTitle}`}
                subtitle={`${employment.employer}, ${employment.city}`}
                description={employment.description}
                startDate={employment.startDate}
                endDate={employment.endDate}
              />
            ))}
          </Timeline>
        </Section>
        <Section>
          <SectionTitle>
            Education
          </SectionTitle>
          <Timeline>
            {educations.map((education) => (
              <TimelineItem
                title={`${education.degree}`}
                subtitle={`${education.school}, ${education.city}`}
                description={education.description}
                startDate={education.startDate}
                endDate={education.endDate}
              />
            ))}
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
          {links.map((link) => (
            <ResumeLinkItem
              label={link.label}
              url={link.url}
            />
          ))}
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
  links: PropTypes.instanceOf(Array),
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
  links: [],
}

export default Curriculum
