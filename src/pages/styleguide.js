import React from 'react'
import Head from 'next/head'

import Page from '_templates/page'
import Cover from '_molecules/cover'
import CoverTitle from '_atoms/cover-title'
import CoverSubtitle from '_atoms/cover-subtitle'
import Section from '_molecules/section'
import SectionTitle from '_atoms/section-title'
import Container from '_atoms/container'
import routes from '_config/routes'
import Button from '_atoms/button'
import Header from '_organisms/header'
import Footer from '_organisms/footer'


const Home = () => (
  <Page>
    <Head>
      <title>Kaluã Bentes - Styleguide</title>
    </Head>
    <Cover>
      <CoverTitle>Styleguide</CoverTitle>
      <CoverSubtitle>
        Welcome to my websites's styleguide, here you will find every component that assemble this website
      </CoverSubtitle>
    </Cover>
    <Container>
      <Section>
        <SectionTitle>Header</SectionTitle>
        <Header routes={routes} />
      </Section>
      <Section>
        <SectionTitle>Cover</SectionTitle>
        <Cover>
          <CoverTitle>Styleguide</CoverTitle>
          <CoverSubtitle>
            Welcome to my websites's styleguide, here you will find every component that assemble this website
          </CoverSubtitle>
        </Cover>
      </Section>
      <Section>
        <SectionTitle>Footer</SectionTitle>
        <Footer />
      </Section>
      <Section>
        <SectionTitle>Button</SectionTitle>
        <Button>Action</Button>
      </Section>
    </Container>
  </Page>
)

export default Home
