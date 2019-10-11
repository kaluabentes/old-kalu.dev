import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

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
  month, year, onChange, onMonthChange,
}) => {
  const actualYear = (new Date()).getFullYear()
  const currentYear = year || actualYear

  const handleLeftClick = () => {
    onChange(month, Number(currentYear) - 1)
  }

  const handleRightClick = () => {
    onChange(month, Number(currentYear) + 1)
  }

  const handleMonthClick = (monthValue) => {
    onChange(monthValue, currentYear)
    onMonthChange()
  }

  return (
    <div className={styles.picker}>
      <div className={styles.header}>
        <button
          type="button"
          onClick={handleLeftClick}
          className={styles.leftButton}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z" /></svg>
        </button>
        <div className={styles.year}>{currentYear}</div>
        <button
          type="button"
          onClick={handleRightClick}
          className={styles.rightButton}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z" /></svg>
        </button>
      </div>
      <div className={styles.body}>
        {MONTHS.map(
          (currentMonth) => (
            <button
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
    </div>
  )
}

MonthYearPicker.propTypes = {
  month: PropTypes.string,
  year: PropTypes.string,
  onChange: PropTypes.func,
  onMonthChange: PropTypes.func,
}

MonthYearPicker.defaultProps = {
  month: '',
  year: '',
  onChange: () => {},
  onMonthChange: () => {},
}

export default MonthYearPicker
