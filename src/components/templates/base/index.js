import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import '_styles/base.css'

const Base = ({ children }) => (
  <>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Rubik&display=swap" rel="stylesheet" />
    </Head>
    {children}
  </>
)

export default Base
