import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import range from '_utils/range'
import styles from './styles.css'

const SkillLevel = ({ label, level }) => (
  <div className={styles.skillLevel}>
    <div className={styles.label}>{label}</div>
    <div className={styles.level}>
      {range(5).map((number) => (
        <div
          className={classNames(
            styles.levelStep,
            { [styles.levelStepActive]: number <= level }
          )}
        />
      ))}
    </div>
  </div>
)

SkillLevel.propTypes = {
  label: PropTypes.string,
  level: PropTypes.number,
}

SkillLevel.defaultProps = {
  label: '',
  level: 0,
}

export default SkillLevel
