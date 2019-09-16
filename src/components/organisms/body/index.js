import React from 'react'
import PropTypes from 'prop-types'

const Body = ({ children }) => <div>{children}</div>

Body.propTypes = {
  children: PropTypes.node,
}

export default Body
