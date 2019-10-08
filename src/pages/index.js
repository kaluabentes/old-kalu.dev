import React from 'react'
import Head from 'next/head'

import Page from '_templates/page'
import Cover from '_molecules/cover'
import CoverTitle from '_atoms/cover-title'
import CoverSubtitle from '_atoms/cover-subtitle'
import Button from '_atoms/button'
import Articles from '_organisms/articles'

const Home = () => (
  <Page>
    <Head>
      <title>Kaluã Bentes - Frontend Developer</title>
    </Head>
    <Cover>
      <CoverTitle>Frontender, Surfer & Rocker</CoverTitle>
      <CoverSubtitle>
        Hello everybody, I'm Kalu. I code beautiful UI's and I love what I do.
      </CoverSubtitle>
      <Button href="/about">Read about me</Button>
    </Cover>
    <Articles />
  </Page>
)

export default Home
