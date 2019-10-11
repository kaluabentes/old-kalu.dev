import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ClickOutside from 'react-click-outside'

import MonthYearPicker from '_atoms/month-year-picker'
import Input from '_atoms/input'

import styles from './styles.css'

const PICKER_ALIGNMENTS = {
  left: styles.pickerAlignmentLeft,
  right: styles.pickerAlignmentRight,
}

const MonthYearField = ({
  month,
  year,
  onChange,
  label,
  pickerAlignment,
  ...inputProps
}) => {
  const { id } = inputProps
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
          id={id}
        />
        <div
          className={
            classNames(
              styles.picker,
              pickerAlignment,
              {
                [styles.pickerOpen]: isPickerOpen,
                [styles.withLabel]: !!label,
              },
            )
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

MonthYearField.propTypes = {
  month: PropTypes.string,
  year: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.func,
  pickerAlignment: PropTypes.string,
}

MonthYearField.defaultProps = {
  month: '',
  year: '',
  onChange: () => {},
  label: '',
  pickerAlignment: PICKER_ALIGNMENTS.left,
}

MonthYearField.alignments = PICKER_ALIGNMENTS

export default MonthYearField
