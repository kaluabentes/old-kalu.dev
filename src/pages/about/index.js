import React, { createRef } from 'react'

import Page from '_templates/page'
import Cover from '_molecules/cover'
import CoverTitle from '_atoms/cover-title'
import CoverSubtitle from '_atoms/cover-subtitle'
import Container from '_atoms/container'
import Resume from '_organisms/resume'
import Button from '_atoms/button'
import PdfTools from '_utils/pdf-tools'
import { PDFExport } from '@progress/kendo-react-pdf'
import myPhoto from '_images/me.jpeg'

import styles from './styles.css'

const SUBTITLE = `
  Here you will find all the information about <br />who
  I am, what is my interests, background experience
  and skills
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

const About = () => {
  const resumeRef = createRef()
  let pdfExportComponent

  const handleDownloadClick = async () => {
    const pdfTools = new PdfTools(resumeRef.current)
    pdfTools.convertSvgsToCanvas()

    setTimeout(() => {
      pdfExportComponent.save()

      setTimeout(() => {
        pdfTools.removeSvgsCanvas()
      }, 600)
    }, 600)
  }

  return (
    <Page>
      <Cover>
        <CoverTitle>About me</CoverTitle>
        <CoverSubtitle>
          {/* eslint-disable-next-line react/no-danger */}
          <div dangerouslySetInnerHTML={{ __html: SUBTITLE }} />
        </CoverSubtitle>
      </Cover>
      <Container>
        <div className={styles.downloadButtonContainer}>
          <Button onClick={handleDownloadClick}>Download PDF</Button>
        </div>
        <PDFExport
          ref={(component) => {
            pdfExportComponent = component
          }}
          pageSize="A4"
          margin="40pt"
          fileName="kaluabentes"
        >
          <Resume
            ref={resumeRef}
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
              endDate: 'Present',
              description: PROFESSIONAL_SUMMARY,
            },
            {
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
            },
            {
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
        </PDFExport>
      </Container>
    </Page>
  )
}

export default About
