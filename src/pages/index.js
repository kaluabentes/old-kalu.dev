import React from 'react'
import Head from 'next/head'

import Page from '_templates/page'
import Cover from '_organisms/cover'
import Articles from '_organisms/articles'

const Home = () => (
  <Page>
    <Head>
      <title>Kaluã Bentes - Frontend Developer</title>
    </Head>
    <Cover />
    <Articles />
  </Page>
)

export default Home
