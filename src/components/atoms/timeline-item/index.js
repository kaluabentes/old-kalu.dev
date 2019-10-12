import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const TimelineItem = ({
  title,
  subtitle,
  description,
  startDate,
  endDate,
}) => (
  <li className={styles.item}>
    <div className={styles.period}>
      <div>{startDate}</div>
      <div>{endDate}</div>
    </div>
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
  startDate: PropTypes.string,
  endDate: PropTypes.string,
}

TimelineItem.defaultProps = {
  title: '',
  subtitle: '',
  description: '',
  startDate: '',
  endDate: '',
}

export default TimelineItem
