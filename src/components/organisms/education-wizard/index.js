import React, { createRef } from 'react'
import PropTypes from 'prop-types'

import WizardAccordion from '_molecules/wizard-accordion'
import Input from '_atoms/input'
import TextArea from '_atoms/text-area'
import useInputFocus from '_hooks/use-input-focus'
import MonthYearField from '_molecules/month-year-field'

import styles from '_organisms/employment-wizard/styles.css'

const EducationWizard = ({
  education,
  onChange,
  ...wizardAccordionProps
}) => {
  const { isOpen, onToggle, onRemove } = wizardAccordionProps
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
      title={`${education.degree} at ${education.school}`}
      subtitle={`${education.startDate} - ${education.endDate}`}
      isOpen={isOpen}
      onToggle={onToggle}
      onRemove={onRemove}
    >
      <Input
        id="school"
        name="school"
        label="School"
        value={education.school}
        onChange={handleChange}
        ref={firstInputRef}
      />
      <Input
        id="degree"
        name="degree"
        label="Degree"
        value={education.degree}
        onChange={handleChange}
      />
      <Input
        id="city"
        name="city"
        label="City"
        value={education.city}
        onChange={handleChange}
      />
      <div className={styles.periodDateGrid}>
        <MonthYearField
          id="educationStartDate"
          label="Start Date"
          value={education.startDate}
          onChange={handleStartDateChange}
        />
        <MonthYearField
          id="educationEndDate"
          label="End Date"
          value={education.endDate}
          onChange={handleEndDateChange}
          pickerAlignment={MonthYearField.alignments.right}
          hasPresentOption
          presentOptionLabel="Currently study here"
        />
      </div>
      <TextArea
        id="description"
        name="description"
        label="Description"
        onChange={handleChange}
        value={education.description}
      />
    </WizardAccordion>
  )
}

EducationWizard.propTypes = {
  education: PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    city: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    description: PropTypes.string,
  }),
  onChange: PropTypes.func,
}

EducationWizard.defaultProps = {
  education: {
    school: 'Havard',
    degree: 'Bacherol in Computer Science',
    city: 'Massasuchets',
    startDate: 'Oct, 2018',
    endDate: 'Oct, 2019',
    description: '',
  },
  onChange: () => {},
}

export default EducationWizard
