import React, { Component, createRef } from 'react'
import classnames from 'classnames'

import Page from '_templates/page'
import Cover from '_molecules/cover'
import CoverTitle from '_atoms/cover-title'
import CoverSubtitle from '_atoms/cover-subtitle'
import Container from '_atoms/container'
import Resume from '_organisms/resume'
import ActionButton from '_atoms/action-button'
import DownloadIcon from '_atoms/icon/download'
import PDFTools from '_utils/pdf-tools'
import { PDFExport } from '@progress/kendo-react-pdf'
import myPhoto from '_images/me.jpeg'
import resumeData from '_data/resume'
import aboutData from '_data/about'

import styles from './styles.css'

class About extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isDownloadButtonShown: false,
    }

    this.resumeRef = createRef()

    this.handleDownloadClick = this.handleDownloadClick.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    if (window.scrollY > 200) {
      this.setState({
        isDownloadButtonShown: true,
      })
      return
    }

    this.setState({
      isDownloadButtonShown: false,
    })
  }

  handleDownloadClick() {
    const pdfTools = new PDFTools(this.resumeRef.current)
    pdfTools.convertSvgsToCanvas()

    setTimeout(() => {
      this.pdfExportComponent.save()

      setTimeout(() => {
        pdfTools.removeSvgsCanvas()
      }, 600)
    }, 600)
  }

  render() {
    const { isDownloadButtonShown } = this.state

    return (
      <Page title="About">
        <Cover>
          <CoverTitle>About me</CoverTitle>
          <CoverSubtitle>{aboutData.subtitle}</CoverSubtitle>
        </Cover>
        <div className={styles.containerWrapper}>
          <Container>
            <div
              className={classnames(styles.mobileDownloadButton, {
                [styles.mobileDownloadButtonShown]: isDownloadButtonShown,
              })}
            >
              <ActionButton onClick={this.handleDownloadClick} icon={<DownloadIcon />} />
            </div>
            <div className={styles.resumeGroup}>
              <Resume
                ref={this.resumeRef}
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
                onDowloadClick={this.handleDownloadClick}
              />
            </div>
            <div className={styles.exportArea}>
              <PDFExport
                ref={component => {
                  this.pdfExportComponent = component
                }}
                pageSize="A4"
                margin="60pt"
                fileName="kaluabentes"
              >
                <Resume
                  isExportable
                  ref={this.resumeRef}
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
        </div>
      </Page>
    )
  }
}

export default About
