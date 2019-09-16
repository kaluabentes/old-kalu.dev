import React from 'react'
import PropTypes from 'prop-types'

import Container from '_atoms/container'

const Body = ({ children }) => <Container>{children}</Container>

Body.propTypes = {
  children: PropTypes.node,
}

export default Body
