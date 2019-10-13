import React, { createRef } from 'react'

import Page from '_templates/page'
import Cover from '_molecules/cover'
import CoverTitle from '_atoms/cover-title'
import CoverSubtitle from '_atoms/cover-subtitle'
import Container from '_atoms/container'
import Resume from '_organisms/resume'
import Button from '_atoms/button'
import ActionButton from '_atoms/action-button'
import DownloadIcon from '_atoms/icon/download'
import PDFTools from '_utils/pdf-tools'
import { PDFExport } from '@progress/kendo-react-pdf'
import myPhoto from '_images/me.jpeg'
import resumeData from '_data/resume'
import aboutData from '_data/about'

import styles from './styles.css'

const About = () => {
  const resumeRef = createRef()
  let pdfExportComponent

  const handleDownloadClick = async () => {
    const pdfTools = new PDFTools(resumeRef.current)
    pdfTools.convertSvgsToCanvas()

    setTimeout(() => {
      pdfExportComponent.save()

      setTimeout(() => {
        pdfTools.removeSvgsCanvas()
      }, 600)
    }, 600)
  }

  return (
    <Page title="About">
      <Cover>
        <CoverTitle>About me</CoverTitle>
        <CoverSubtitle>
          {aboutData.subtitle}
        </CoverSubtitle>
      </Cover>
      <Container>
        <div className={styles.mobileDownloadButton}>
          <ActionButton
            onClick={handleDownloadClick}
            icon={<DownloadIcon />}
          />
        </div>
        <div className={styles.resumeGroup}>
          <div className={styles.downloadButtonContainer}>
            <Button onClick={handleDownloadClick}>Download PDF</Button>
          </div>
          <Resume
            ref={resumeRef}
            photo={myPhoto}
            name={resumeData.name}
            jobTitle={resumeData.jobTitle}
            phone={resumeData.phone}
            email={resumeData.email}
            address={resumeData.address}
            professionalSummary={resumeData.professionalSummary}
            employments={resumeData.employments}
            links={resumeData.links}
            skills={resumeData.skills}
          />
        </div>
        <div className={styles.exportArea}>
          <PDFExport
            ref={(component) => {
              pdfExportComponent = component
            }}
            pageSize="A4"
            margin="60pt"
            fileName="kaluabentes"
          >
            <Resume
              isPadded={false}
              ref={resumeRef}
              photo={myPhoto}
              name={resumeData.name}
              jobTitle={resumeData.jobTitle}
              phone={resumeData.phone}
              email={resumeData.email}
              address={resumeData.address}
              professionalSummary={resumeData.professionalSummary}
              employments={resumeData.employments}
              links={resumeData.links}
              skills={resumeData.skills}
            />
          </PDFExport>
        </div>
      </Container>
    </Page>
  )
}

export default About
