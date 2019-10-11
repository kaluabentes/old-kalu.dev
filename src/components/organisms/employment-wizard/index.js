import React, { createRef } from 'react'
import PropTypes from 'prop-types'

import WizardAccordion from '_molecules/wizard-accordion'
import Input from '_atoms/input'
import TextArea from '_atoms/text-area'
import MonthYearField from '_molecules/month-year-field'
import useInputFocus from '_hooks/use-input-focus'

import styles from './styles.css'

const EmploymentWizard = ({
  employment,
  onChange,
  ...wizardAccordionProps
}) => {
  const { onRemove, onToggle, isOpen } = wizardAccordionProps
  const firstInputRef = createRef()

  useInputFocus(firstInputRef)

  const handleChange = (event) => {
    onChange(event.target.name, event.target.value)
  }

  const handleStartDateChange = (value) => {
    onChange('startDate', value)
  }

  const handleEndDateChange = (value) => {
    onChange('endDate', value)
  }

  return (
    <WizardAccordion
      title={`${employment.jobTitle} at ${employment.employer}`}
      subtitle={`${employment.startDate} - ${employment.endDate}`}
      isOpen={isOpen}
      onToggle={onToggle}
      onRemove={onRemove}
    >
      <Input
        id="jobTitle"
        name="jobTitle"
        label="Job Title"
        value={employment.jobTitle}
        onChange={handleChange}
        ref={firstInputRef}
      />
      <Input
        id="employer"
        name="employer"
        label="Employer"
        value={employment.employer}
        onChange={handleChange}
      />
      <Input
        id="city"
        name="city"
        label="City"
        value={employment.city}
        onChange={handleChange}
      />
      <div className={styles.periodDateGrid}>
        <MonthYearField
          id="employmentStartDate"
          label="Start Date"
          value={employment.startDate}
          onChange={handleStartDateChange}
        />
        <MonthYearField
          id="employmentEndDate"
          label="End Date"
          value={employment.endDate}
          onChange={handleEndDateChange}
          pickerAlignment={MonthYearField.alignments.right}
          hasPresentOption
          presentOptionLabel="Currently work here"
        />
      </div>
      <TextArea
        id="description"
        name="description"
        label="Description"
        onChange={handleChange}
        value={employment.description}
      />
    </WizardAccordion>
  )
}

EmploymentWizard.propTypes = {
  employment: PropTypes.shape({
    jobTitle: PropTypes.string,
    employer: PropTypes.string,
    city: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    description: PropTypes.string,
  }),
  onChange: PropTypes.func,
}

EmploymentWizard.defaultProps = {
  employment: {
    jobTitle: 'Frontend Develoer',
    employer: 'Cheesecake Labs',
    city: 'Florianópolis',
    startDate: 'Oct, 2018',
    endDate: 'Oct, 2019',
    description: '',
  },
  onChange: () => {},
}

export default EmploymentWizard
