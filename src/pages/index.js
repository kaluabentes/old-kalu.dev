import React from 'react'
import Link from 'next/link'

import Page from '_templates/page'
import Cover from '_molecules/cover'
import CoverTitle from '_atoms/cover-title'
import CoverSubtitle from '_atoms/cover-subtitle'

const SUBTITLE = `
  Hello everybody, I'm Kalu. I code 
  beautiful UI's and I love what I do.
`

const Home = () => (
  <Page title="Frontend Developer">
    <Cover>
      <CoverTitle>Solving one problem at a time</CoverTitle>
      <CoverSubtitle>
        {SUBTITLE}
      </CoverSubtitle>
      <Link href="/about">
        <a href="/about">Read more about</a>
      </Link>
    </Cover>
  </Page>
)

export default Home
