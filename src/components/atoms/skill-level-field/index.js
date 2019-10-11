import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import inputStyles from '_atoms/input/styles.css'
import styles from './styles.css'

const LEVELS = [
  {
    value: 1,
    label: 'Novice',
    needleStyle: styles.needleNovice,
    fieldStyle: styles.fieldNovice,
    labelStyle: styles.labelNovice,
  },
  {
    value: 2,
    label: 'Beginner',
    needleStyle: styles.needleBeginner,
    fieldStyle: styles.fieldBeginner,
    labelStyle: styles.labelBeginner,
  },
  {
    value: 3,
    label: 'Skillful',
    needleStyle: styles.needleSkillful,
    fieldStyle: styles.fieldSkillful,
    labelStyle: styles.labelSkillful,
  },
  {
    value: 4,
    label: 'Experienced',
    needleStyle: styles.needleExperienced,
    fieldStyle: styles.fieldExperienced,
    labelStyle: styles.labelExperienced,
  },
  {
    value: 5,
    label: 'Expert',
    needleStyle: styles.needleExpert,
    fieldStyle: styles.fieldExpert,
    labelStyle: styles.labelExpert,
  },
]

const SkillLevelField = ({
  id,
  label,
  value,
  onChange,
}) => {
  const currentLevel = LEVELS[value - 1]

  const moveNeedle = (level) => ({
    transform: `translateX(${(level - 1) * 100}%)`,
  })

  return (
    <div className={inputStyles.container}>
      {label && (
        <label
          className={inputStyles.label}
          htmlFor={id}
        >
          {label}
          {' '}
—
          <span className={currentLevel.labelStyle}>{currentLevel.label}</span>
        </label>
      )}

      <div
        className={
          classNames(
            inputStyles.input,
            styles.field,
            currentLevel.fieldStyle,
          )
        }
      >
        <div
          className={
            classNames(
              styles.needle,
              currentLevel.needleStyle,
            )
          }
          style={moveNeedle(value)}
        />
        {LEVELS.map((level) => (
          <button
            key={level.label}
            type="button"
            onClick={() => onChange(level.value)}
            className={styles.level}
          />
        ))}
      </div>
    </div>
  )
}

SkillLevelField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
}

SkillLevelField.defaultProps = {
  id: '',
  label: '',
  value: '',
  onChange: () => {},
}

SkillLevelField.levels = LEVELS

export default SkillLevelField
