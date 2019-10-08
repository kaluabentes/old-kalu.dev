import React from 'react'
import PropTypes from 'prop-types'

import Container from '_atoms/container'

import styles from './styles.css'

const Cover = ({ children }) => (
  <div className={styles.cover}>
    <Container>
      <div className={styles.inner}>
        {children}
      </div>
    </Container>
  </div>
)

Cover.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Cover
