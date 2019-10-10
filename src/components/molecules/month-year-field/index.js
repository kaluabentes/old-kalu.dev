import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ClickOutside from 'react-click-outside'

import MonthYearPicker from '_atoms/month-year-picker'
import Input from '_atoms/input'

import styles from './styles.css'

const MonthYearField = ({ month, year, onChange, label, ...inputProps }) => {
  const [isPickerOpen, setPickerOpen] = useState(false)
  const dateValue = month && year ? `${month}, ${year}` : ''

  const handlePickerOpen = () => {
    setPickerOpen(true)
  }

  const handlePickerClose = () => {
    setPickerOpen(false)
  }

  return (
    <ClickOutside onClickOutside={handlePickerClose}>
      <div className={styles.container}>
        <Input 
          onFocus={handlePickerOpen}
          onClick={handlePickerOpen}
          value={dateValue} 
          placeholder="MM / YYYY"
          label={label}
          {...inputProps}
        />
        <div className={
          classNames(
            styles.picker, 
            { [styles.pickerOpen]: isPickerOpen, [styles.withLabel]: !!label })
          }
        >
          <MonthYearPicker 
            month={month} 
            year={year} 
            onChange={onChange} 
            onMonthChange={handlePickerClose} 
          />
        </div>
      </div>
    </ClickOutside>
  )
}

export default MonthYearField
