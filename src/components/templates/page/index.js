import React from 'react'
import PropTypes from 'prop-types'

import Base from '_templates/base'
import Header from '_organisms/header'
import Body from '_organisms/body'
import Footer from '_organisms/footer'
import routes from '_config/routes'

const Page = ({ children }) => (
  <Base>
    <Header routes={routes} />
    <Body>{children}</Body>
    <Footer />
  </Base>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
