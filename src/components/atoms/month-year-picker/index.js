import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Toggler from '_atoms/toggler'
import ChevronIcon from '_atoms/icon/chevron'
import styles from './styles.css'

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const MonthYearPicker = ({
  value,
  onChange,
  onMonthChange,
  hasPresentOption,
  presentOptionLabel,
}) => {
  const actualYear = (new Date()).getFullYear()
  const [month, year] = value.split(',').map((str) => str.trim())
  const currentYear = year || actualYear
  const [isPresent, setIsPresent] = useState(false)

  const formatValue = (monthValue, yearValue) => `${monthValue}, ${yearValue}`

  const handleLeftClick = () => {
    onChange(formatValue(month, Number(currentYear) - 1))
  }

  const handleRightClick = () => {
    onChange(formatValue(month, Number(currentYear) + 1))
  }

  const handleMonthClick = (monthValue) => {
    onChange(formatValue(monthValue, currentYear))
    onMonthChange()
  }

  const handlePresentTogglerClick = () => {
    setIsPresent(!isPresent)
    onChange('Present')
  }

  return (
    <div className={classNames(styles.picker, { [styles.pickerDisabled]: isPresent })}>
      <div className={styles.header}>
        <button
          type="button"
          onClick={handleLeftClick}
          className={styles.leftButton}
          disabled={isPresent}
        >
          <ChevronIcon />
        </button>
        <div className={styles.year}>{currentYear}</div>
        <button
          type="button"
          onClick={handleRightClick}
          className={styles.rightButton}
          disabled={isPresent}
        >
          <ChevronIcon />
        </button>
      </div>
      <div className={styles.body}>
        {MONTHS.map(
          (currentMonth) => (
            <button
              disabled={isPresent}
              type="button"
              key={currentMonth}
              onClick={() => handleMonthClick(currentMonth)}
              className={
                classNames(
                  styles.month,
                  { [styles.monthActive]: month === currentMonth },
                )
              }
            >
              {currentMonth}
            </button>
          ),
        )}
      </div>
      {hasPresentOption && (
        <div className={styles.footer}>
          <div className={styles.presentOptionGroup}>
            <Toggler isActive={isPresent} onClick={handlePresentTogglerClick} />
            <div className={styles.togglerLabel}>{presentOptionLabel}</div>
          </div>
        </div>
      )}
    </div>
  )
}

MonthYearPicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onMonthChange: PropTypes.func,
  hasPresentOption: PropTypes.bool,
  presentOptionLabel: PropTypes.string,
}

MonthYearPicker.defaultProps = {
  value: '',
  onChange: () => {},
  onMonthChange: () => {},
  hasPresentOption: false,
  presentOptionLabel: '',
}

export default MonthYearPicker
