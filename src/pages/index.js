import React from 'react'
import Head from 'next/head'

import Page from '_templates/page'
import Cover from '_molecules/cover'
import CoverTitle from '_atoms/cover-title'
import CoverSubtitle from '_atoms/cover-subtitle'
import Button from '_atoms/button'

const Home = () => (
  <Page title="Frontend Developer">
    <Cover>
      <CoverTitle>Solving one problem at a time</CoverTitle>
      <CoverSubtitle>
        Hello everybody, I'm Kalu. I code beautiful UI's and I love what I do.
      </CoverSubtitle>
      <Button href="/about">Read about me</Button>
    </Cover>
  </Page>
)

export default Home
