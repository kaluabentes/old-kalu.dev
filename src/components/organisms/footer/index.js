import React from 'react'

import Container from '_atoms/container'
import Brand from '_atoms/brand'
import GithubIcon from '_atoms/icon/github'
import LinkedinIcon from '_atoms/icon/linkedin'

import styles from './styles.css'

const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <div className={styles.row}>
        <Brand />
        <p className={styles.greetings}>
          Say hi,
          {' '}
          <a href="mailto:kaluanbentes@gmail.com" className={styles.email}>
            kaluanbentes@gmail.com
          </a>
        </p>
        <div>
          <a className={styles.icon} href="https://github.com/kaluabentes" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
          <a
            className={styles.icon}
            href="https://www.linkedin.com/in/kalu%C3%A3-bentes-5a5245103/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </a>
        </div>
        <p className={styles.copyright}>
          Copyright ©
          {' '}
          {new Date().getFullYear()}
          {' '}
Kaluã Bentes, Inc. All rights reserved.
        </p>
      </div>
    </Container>
  </footer>
)

export default Footer
