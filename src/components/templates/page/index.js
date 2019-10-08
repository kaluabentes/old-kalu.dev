import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import Base from '_templates/base'
import Header from '_organisms/header'
import Body from '_organisms/body'
import Footer from '_organisms/footer'
import routes from '_config/routes'

const Page = ({ children, title }) => (
  <Base>
    <Head>
      <title>Kaluã Bentes - {title}</title>
    </Head>
    <Header isFixed routes={routes} />
    <Body>{children}</Body>
    <Footer />
  </Base>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

Page.defaultProps = {
  title: '',
}

export default Page
