import React, { useState, useEffect, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Accordion from '_molecules/accordion'
import Input from '_atoms/input'
import TextArea from '_atoms/text-area'

import styles from './styles.css'

const EmploymentAccordion = ({ 
  hasFocus, 
  employment, 
  onChange,
  onRemove, 
  onFocus,
  ...accordionProps
}) => {
  const { isOpen, onToggle } = accordionProps
  const titleGroupRef = createRef()
  const firstInputRef = createRef()

  let alreadyScrolled = false

  useEffect(() => {
    if (!alreadyScrolled) {
      setTimeout(() => {
        if (titleGroupRef.current) {
          window.scrollTo(0, titleGroupRef.current.offsetTop - 64)
          alreadyScrolled = true
        }
      }, 300)
    }

    if (hasFocus) {
      firstInputRef.current.focus()
      onFocus()
    }
  })

  const handleChange = event => {
    onChange(event.target.name, event.target.value)
  }

  const handleRemove = event => {
    event.stopPropagation()
    onRemove()
  }

  return (
    <Accordion
      isOpen={isOpen}
      onToggle={onToggle}
      header={
        <>
          <div ref={titleGroupRef} className={styles.titleGroup}>
            <div className={styles.title}>{employment.jobTitle} at {employment.employer}</div>
            <div className={styles.periodDate}>{employment.startDate} - {employment.endDate}</div>
          </div>
          <button onClick={handleRemove} className={styles.removeButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M8,19 L16,19 L16,13 L8,13 L8,19 Z M16,7 L20,7 L20,9 L4,9 L4,7 L8,7 L8,3 L16,3 L16,7 Z M14,7 L14,5 L10,5 L10,7 L14,7 Z M6,11 L18,11 L18,21 L6,21 L6,11 Z" fillRule="nonzero"></path></svg>
          </button>
          <div className={styles.arrowIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z"></path></svg>
          </div>
        </>
      }
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
        <Input 
          id="startDate" 
          name="startDate" 
          label="Start Date" 
          value={employment.startDate}
          onChange={handleChange}
        />
        <Input 
          id="endDate" 
          name="endDate" 
          label="End Date" 
          value={employment.endDate}
          onChange={handleChange}
        />
      </div>
      <TextArea 
        id="description" 
        name="description" 
        label="Description"
        onChange={handleChange}
        value={employment.description}
      />
    </Accordion>
  )
}

EmploymentAccordion.propTypes = {  
  employment: PropTypes.shape({
    jobTitle: PropTypes.string,
    employer: PropTypes.string,
    city: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    description: PropTypes.description,
  }), 
  onChange: PropTypes.func, 
}

EmploymentAccordion.defaultProps = { 
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

export default EmploymentAccordion
