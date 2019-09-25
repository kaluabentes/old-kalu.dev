import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

import '_styles/base.css'

const Base = ({ children }) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,700&display=swap"
        rel="stylesheet"
      />
    </Head>
    {children}
  </>
)

export default Base
