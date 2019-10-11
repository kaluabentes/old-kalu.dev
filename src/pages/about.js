import React from 'react'

import Page from '_templates/page'
import Cover from '_molecules/cover'
import CoverTitle from '_atoms/cover-title'
import CoverSubtitle from '_atoms/cover-subtitle'
import Container from '_atoms/container'
import CurriculumVitae from '_organisms/curriculum-vitae'
import myPhoto from '_images/me.jpeg'

const SUBTITLE = `
  Here you will find all the information about <br />who
  I am, what is my interests, background experience
  and work history
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
      <CurriculumVitae
        photo={myPhoto}
        name="Kaluã Bentes"
        jobTitle="Frontend Developer"
      />
    </Container>
  </Page>
)

export default About
