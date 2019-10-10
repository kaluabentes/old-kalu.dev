import React, { useState, useEffect, createRef } from 'react'
import PropTypes from 'prop-types'

import WizardAccordion from '_molecules/wizard-accordion'
import Input from '_atoms/input'
import TextArea from '_atoms/text-area'
import useInputFocus from '_hooks/use-input-focus'

import styles from './styles.css'

const EducationWizard = ({ 
  hasFocus, 
  education, 
  onChange,
  onFocus,
  ...wizardAccordionProps
}) => {
  const firstInputRef = createRef()

  useInputFocus(firstInputRef, hasFocus, onFocus)

  const handleChange = event => {
    onChange(event.target.name, event.target.value)
  }

  return (
    <WizardAccordion
      title={`${education.degree} at ${education.school}`}
      subtitle={`${education.startDate} - ${education.endDate}`}
      {...wizardAccordionProps}
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
        <Input 
          id="startDate" 
          name="startDate" 
          label="Start Date" 
          value={education.startDate}
          onChange={handleChange}
        />
        <Input 
          id="endDate" 
          name="endDate" 
          label="End Date" 
          value={education.endDate}
          onChange={handleChange}
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
  hasFocus: PropTypes.bool,
  education: PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    city: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    description: PropTypes.description,
  }), 
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
}

EducationWizard.defaultProps = {
  hasFocus: false,
  education: {
    school: 'Havard',
    degree: 'Bacherol in Computer Science',
    city: 'Massasuchets',
    startDate: 'Oct, 2018',
    endDate: 'Oct, 2019',
    description: '',
  }, 
  onChange: () => {},
  onFocus: () => {},
}

export default EducationWizard
