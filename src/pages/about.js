import React from 'react'

import Page from '_templates/page'
import Cover from '_molecules/cover'
import CoverTitle from '_atoms/cover-title'
import CoverSubtitle from '_atoms/cover-subtitle'
import Container from '_atoms/container'
import Resume from '_organisms/resume'
import myPhoto from '_images/me.jpeg'

const SUBTITLE = `
  Here you will find all the information about <br />who
  I am, what is my interests, background experience
  and work history
`

const PROFESSIONAL_SUMMARY = `
  I'm a developer since 2013, I love to build beautiful
  UI's and apps that cause a positive impact in the world,
  It drives me, I began working as a full-stack developer
  working with tech such as HTML5, CSS3, JavaScript, PHP,
  Laravel and Joomla CMS. Currently, I've been giving special
  attention to frontend development, I developed a profound
  interest in building good looking and improved user
  experience UI's.
`

const About = () => (
  <Page>
    <Cover>
      <CoverTitle>About me</CoverTitle>
      <CoverSubtitle>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: SUBTITLE }} />
      </CoverSubtitle>
    </Cover>
    <Container>
      <Resume
        photo={myPhoto}
        name="Kaluã Bentes"
        jobTitle="Frontend Developer"
        phone="48996288801"
        email="kaluanbentes@gmail.com"
        address="Florianópolis, Brazil"
        professionalSummary={PROFESSIONAL_SUMMARY}
        employments={[{
          jobTitle: 'Frontend Develoer',
          employer: 'Cheesecake Labs',
          city: 'Florianópolis',
          startDate: 'Oct, 2018',
          endDate: 'Oct, 2019',
          description: PROFESSIONAL_SUMMARY,
        },
        {
          jobTitle: 'Frontend Develoer',
          employer: 'Cheesecake Labs',
          city: 'Florianópolis',
          startDate: 'Oct, 2018',
          endDate: 'Oct, 2019',
          description: PROFESSIONAL_SUMMARY,
        }]}
        educations={[{
          school: 'Havard',
          degree: 'Bacherol in Computer Science',
          city: 'Massasuchets',
          startDate: 'Oct, 2018',
          endDate: 'Oct, 2019',
          description: PROFESSIONAL_SUMMARY,
        },
        {
          school: 'Havard',
          degree: 'Bacherol in Computer Science',
          city: 'Massasuchets',
          startDate: 'Oct, 2018',
          endDate: 'Oct, 2019',
          description: PROFESSIONAL_SUMMARY,
        }]}
        links={[
          { label: 'Website', url: 'https://kalu.dev' },
          { label: 'Github', url: 'https://github.com/kaluabentes' },
          { label: 'Linkedin', url: 'https://linkedin.com/in/kalua-bentes' },
        ]}
        skills={[
          { label: 'HTML 5', level: 2 },
          { label: 'CSS 3', level: 3 },
          { label: 'EcmaScript 6', level: 4 },
        ]}
      />
    </Container>
  </Page>
)

export default About
