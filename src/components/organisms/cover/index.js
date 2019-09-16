import React from 'react'
import PropTypes from 'prop-types'

import Container from '_atoms/container'
import Button from '_atoms/button'

import styles from './styles.css'

const Cover = ({}) => (
  <div className={styles.cover}>
    <Container>
      <div className={styles.inner}>
        <h2 className={styles.title}>Life surfer</h2>
        <p className={styles.subtitle}>and frontend developer</p>
        <Button href="/about">Read more about</Button>
      </div>
    </Container>
  </div>
)

export default Cover
