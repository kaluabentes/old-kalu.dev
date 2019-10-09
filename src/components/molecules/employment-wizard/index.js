import React, { useState, useEffect, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Input from '_atoms/input'
import TextArea from '_atoms/text-area'

import styles from './styles.css'

const EmploymentWizard = ({ isOpen, employment, onChange, onToggle }) => {
  const [wizardHeight, setWizardHeight] = useState(0)
  const wizardRef = createRef()

  useEffect(() => {
    setWizardHeight(wizardRef.current.scrollHeight)
  })

  return (
    <div 
      ref={wizardRef} 
      style={{ height: isOpen ? `${wizardHeight}px` : `77px` }} 
      className={classNames(styles.wizard, { [styles.open]: isOpen })}
    >
      <button onClick={onToggle} className={styles.header}>
        <div className={styles.titleGroup}>
          <div className={styles.title}>{employment.jobTitle} at {employment.employer}</div>
          <div className={styles.periodDate}>{employment.startDate} - {employment.endDate}</div>
        </div>
        <div className={styles.arrowIcon}>
          <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z"></path></svg>
        </div>
      </button>
      <div className={styles.form}>
        <Input 
          id="jobTitle" 
          name="jobTitle" 
          label="Job Title" 
          value={employment.jobTitle} 
          onChange={onChange} 
        />
        <Input 
          id="employer" 
          name="employer" 
          label="Employer" 
          value={employment.employer} 
          onChange={onChange}
        />
        <Input 
          id="city" 
          name="city" 
          label="City" 
          value={employment.city}
          onChange={onChange}
        />
        <div className={styles.periodDateGrid}>
          <Input 
            id="startDate" 
            name="startDate" 
            label="Start Date" 
            value={employment.startDate}
            onChange={onChange}
          />
          <Input 
            id="endDate" 
            name="endDate" 
            label="End Date" 
            value={employment.endDate}
            onChange={onChange}
          />
        </div>
        <TextArea 
          id="description" 
          name="description" 
          label="Description"
          onChange={onChange}
          value={employment.description}
        />
      </div>
    </div>
  )
}

EmploymentWizard.propTypes = { 
  isOpen: PropTypes.bool, 
  employment: PropTypes.shape({
    jobTitle: PropTypes.string,
    employer: PropTypes.string,
    city: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    description: PropTypes.description,
  }), 
  onChange: PropTypes.func, 
  onToggle: PropTypes.func,
}

EmploymentWizard.defaultProps = { 
  isOpen: false, 
  employment: {
    jobTitle: 'Frontend Develoer',
    employer: 'Cheesecake Labs',
    city: 'Florianópolis',
    startDate: 'Oct, 2018',
    endDate: 'Oct, 2019',
    description: '',
  }, 
  onChange: () => {},
  onToggle: () => {},
}

export default EmploymentWizard
