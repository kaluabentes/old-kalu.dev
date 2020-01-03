import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

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
import Paper from '_atoms/paper'

import styles from './styles.css'

const Resume = forwardRef(
  (
    {
      isExportable,
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
      onDownloadClick,
    },
    ref
  ) => {
    const renderSkillsSection = isGrid => (
      <Section>
        <Paper hasPadding={!isExportable}>
          <SectionTitle>Skills</SectionTitle>
          <div className={classnames({ [styles.skillsGrid]: isGrid })}>
            {skills.map(skill => (
              <SkillLevel key={skill.label} label={skill.label} level={skill.level} />
            ))}
          </div>
        </Paper>
      </Section>
    )

    return (
      <article
        ref={ref}
        className={classnames(styles.resume, { [styles.exportable]: isExportable })}
      >
        <ResumeHeader
          onDownloadClick={onDownloadClick}
          isExportable={isExportable}
          photo={photo}
          name={name}
          jobTitle={jobTitle}
        />
        <div className={styles.grid}>
          <div>
            <ResumeProfile isExportable={isExportable} content={professionalSummary} />
            <Section>
              <Paper hasPadding={!isExportable}>
                <SectionTitle>Experience</SectionTitle>
                <Timeline>
                  {employments.map(employment => (
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
              </Paper>
            </Section>
            {educations.length ? (
              <Section>
                <Paper hasPadding={!isExportable}>
                  <SectionTitle>Education</SectionTitle>
                  <Timeline>
                    {educations.map(education => (
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
                </Paper>
              </Section>
            ) : (
              renderSkillsSection(true)
            )}
          </div>
          <div className={styles.columnRight}>
            <Section>
              <Paper hasPadding={!isExportable}>
                <SectionTitle>Details</SectionTitle>
                <DetailItem icon={<WhatsappIcon />} text={phone} />
                <DetailItem icon={<EmailIcon />} text={email} />
                <DetailItem icon={<MarkerIcon />} text={address} />
              </Paper>
            </Section>
            <Section>
              <Paper hasPadding={!isExportable}>
                <SectionTitle>Links</SectionTitle>
                {links.map(link => (
                  <ResumeLinkItem key={link.label} label={link.label} url={link.url} />
                ))}
              </Paper>
            </Section>
            {educations.length ? renderSkillsSection(false) : null}
          </div>
        </div>
      </article>
    )
  }
)

Resume.propTypes = {
  isExportable: PropTypes.bool,
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
  onDownloadClick: PropTypes.func,
}

Resume.defaultProps = {
  isExportable: false,
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
  onDownloadClick: () => {},
}

export default Resume
