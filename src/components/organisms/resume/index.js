import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import ResumeHeader from '_molecules/resume-header'
import ResumeProfile from '_molecules/resume-profile'
import Timeline from '_molecules/timeline'
import TimelineItem from '_atoms/timeline-item'
import Section from '_molecules/section'
import SectionTitle from '_atoms/section-title'
import WhatsappIcon from '_atoms/icon/whatsapp'
import EmailIcon from '_atoms/icon/email'
import MarkerIcon from '_atoms/icon/marker'
import DetailItem from '_atoms/detail-item'
import ResumeLinkItem from '_atoms/resume-link-item'
import SkillLevel from '_atoms/skill-level'

import styles from './styles.css'

const Resume = forwardRef(({
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
  skills,
}, ref) => (
  <article ref={ref} className={styles.resume}>
    <ResumeHeader
      photo={photo}
      name={name}
      jobTitle={jobTitle}
    />
    <div className={styles.grid}>
      <div>
        <ResumeProfile
          content={professionalSummary}
        />
        <Section>
          <SectionTitle>
            Experience
          </SectionTitle>
          <Timeline>
            {employments.map((employment) => (
              <TimelineItem
                key={employment.employer}
                title={`${employment.jobTitle}`}
                subtitle={`${employment.employer}, ${employment.city}`}
                description={employment.description}
                startDate={employment.startDate}
                endDate={employment.endDate}
              />
            ))}
          </Timeline>
        </Section>
        {educations.length ? (
          <Section>
            <SectionTitle>
              Education
            </SectionTitle>
            <Timeline>
              {educations.map((education) => (
                <TimelineItem
                  key={education.school}
                  title={`${education.degree}`}
                  subtitle={`${education.school}, ${education.city}`}
                  description={education.description}
                  startDate={education.startDate}
                  endDate={education.endDate}
                />
              ))}
            </Timeline>
          </Section>
        ) : null}
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
              key={link.label}
              label={link.label}
              url={link.url}
            />
          ))}
        </Section>
        <Section>
          <SectionTitle>Skills</SectionTitle>
          {skills.map((skill) => (
            <SkillLevel
              key={skill.label}
              label={skill.label}
              level={skill.level}
            />
          ))}
        </Section>
      </div>
    </div>
  </article>
))

Resume.propTypes = {
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
  skills: PropTypes.instanceOf(Array),
}

Resume.defaultProps = {
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
  skills: [],
}

export default Resume
