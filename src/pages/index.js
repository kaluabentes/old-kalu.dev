import React from 'react'
import Head from 'next/head'

import Page from '_templates/page'
import Cover from '_organisms/cover'
import Articles from '_organisms/articles'
import Projects from '_organisms/projects'
import projects from '_data/projects'

const Home = () => (
  <Page>
    <Head>
      <title>Kaluã Bentes - Frontend Developer</title>
    </Head>
    <Cover />
    <Articles />
    <Projects projects={projects} />
  </Page>
)

export default Home
