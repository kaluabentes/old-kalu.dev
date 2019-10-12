import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const TimelineItem = ({
  title,
  subtitle,
  description,
  year,
}) => (
  <li className={styles.item}>
    <div className={styles.year}>{year}</div>
    <div className={styles.point}>
      <div className={styles.pointCircle} />
      <div className={styles.pointLine} />
    </div>
    <div className={styles.content}>
      <h6 className={styles.title}>{title}</h6>
      <p className={styles.subtitle}>{subtitle}</p>
      <p className={styles.description}>{description}</p>
    </div>
  </li>
)

TimelineItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  year: PropTypes.string,
}

TimelineItem.defaultProps = {
  title: '',
  subtitle: '',
  description: '',
  year: '',
}

export default TimelineItem
