import React from 'react'
import PropTypes from 'prop-types'

import Base from '_templates/base'

const Page = ({ children }) => <Base>{children}</Base>

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
