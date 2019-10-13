import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const Paper = ({ className, children, hasPadding }) => (
  <div className={
    classNames(
      styles.paper,
      className,
      { [styles.padding]: hasPadding }
    )
  }
  >
    {children}
  </div>
)

Paper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hasPadding: PropTypes.bool,
}

Paper.defaultProps = {
  className: '',
  hasPadding: true,
}

export default Paper
