import React from 'react'
import PropTypes from 'prop-types'

import Container from '_atoms/container'
import Button from '_atoms/button'

import styles from './styles.css'

const Cover = ({}) => (
  <div className={styles.cover}>
    <Container>
      <div className={styles.inner}>
        <h2 className={styles.title}>Hello, I'm Kaluã</h2>
        <p className={styles.subtitle}>and I'm a frontend developer</p>
        <Button href="/about">Read about me</Button>
      </div>
    </Container>
  </div>
)

export default Cover
