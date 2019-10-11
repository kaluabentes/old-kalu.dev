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
  id,
  value,
  onChange,
  label,
  pickerAlignment,
  hasPresentOption,
  presentOptionLabel,
}) => {
  const [isPickerOpen, setPickerOpen] = useState(false)

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
          value={value}
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
            value={value}
            onChange={onChange}
            onMonthChange={handlePickerClose}
            hasPresentOption={hasPresentOption}
            presentOptionLabel={presentOptionLabel}
          />
        </div>
      </div>
    </ClickOutside>
  )
}

MonthYearField.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  pickerAlignment: PropTypes.string,
  hasPresentOption: PropTypes.bool,
  presentOptionLabel: PropTypes.string,
}

MonthYearField.defaultProps = {
  id: '',
  value: '',
  onChange: () => {},
  label: '',
  pickerAlignment: PICKER_ALIGNMENTS.left,
  hasPresentOption: false,
  presentOptionLabel: '',
}

MonthYearField.alignments = PICKER_ALIGNMENTS

export default MonthYearField
