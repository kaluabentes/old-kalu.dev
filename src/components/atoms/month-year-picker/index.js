import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Toggler from '_atoms/toggler'
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
          <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z" /></svg>
        </button>
        <div className={styles.year}>{currentYear}</div>
        <button
          type="button"
          onClick={handleRightClick}
          className={styles.rightButton}
          disabled={isPresent}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z" /></svg>
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
