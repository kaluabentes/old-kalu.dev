import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const DetailItem = ({ icon, text }) => (
  <div className={styles.item}>
    <div className={styles.iconContainer}>{icon}</div>
    <div className={styles.text}>{text}</div>
  </div>
)

DetailItem.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
}

DetailItem.defaultProps = {
  icon: <div />,
  text: '',
}

export default DetailItem
