import React from 'react'

import Page from '_templates/page'
import Cover from '_organisms/cover'
import LatestArticles from '_organisms/latest-articles'

const Home = () => (
  <Page>
    <Cover />
    <LatestArticles />
  </Page>
)

export default Home
