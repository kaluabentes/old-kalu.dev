import React, { createRef } from 'react'
import PropTypes from 'prop-types'

import WizardAccordion from '_molecules/wizard-accordion'
import Input from '_atoms/input'
import TextArea from '_atoms/text-area'
import MonthYearField from '_molecules/month-year-field'
import useInputFocus from '_hooks/use-input-focus'

import styles from './styles.css'

const EmploymentWizard = ({ 
  hasFocus, 
  employment, 
  onChange,
  onFocus,
  ...wizardAccordionProps
}) => {
  const firstInputRef = createRef()
  const startDateList = employment.startDate.split(',').map(string => string.trim())
  const endDateList = employment.endDate.split(',').map(string => string.trim())

  useInputFocus(firstInputRef, hasFocus, onFocus)

  const handleChange = event => {
    onChange(event.target.name, event.target.value)
  }

  const handleDateChange = (field, month, year) => {
    onChange(field, `${month}, ${year}`)
  }

  return (
    <WizardAccordion
      title={`${employment.jobTitle} at ${employment.employer}`}
      subtitle={`${employment.startDate} - ${employment.endDate}`}
      {...wizardAccordionProps}
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
          month={startDateList[0]}
          year={startDateList[1]}
          onChange={(month, year) => handleDateChange('startDate', month, year)}
        />
        {/* <MonthYearField
          label="End Date"
          month={endDateList[0]}
          year={endDateList[1]}
          onChange={(month, year) => handleDateChange('endDate', month, year)}
        /> */}
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
  hasFocus: PropTypes.bool,
  employment: PropTypes.shape({
    jobTitle: PropTypes.string,
    employer: PropTypes.string,
    city: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    description: PropTypes.description,
  }), 
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
}

EmploymentWizard.defaultProps = {
  hasFocus: false,
  employment: {
    jobTitle: 'Frontend Develoer',
    employer: 'Cheesecake Labs',
    city: 'Florianópolis',
    startDate: 'Oct, 2018',
    endDate: 'Oct, 2019',
    description: '',
  }, 
  onChange: () => {},
  onFocus: () => {},
}

export default EmploymentWizard
