import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import Accordion from '_molecules/accordion'
import styles from './styles.css'

const WizardAccordion = forwardRef(
  ({ title, subtitle, onRemove, children, ...accordionProps }, ref) => {
    const handleRemove = event => {
      event.stopPropagation()
      onRemove()
    }
  
    return (
      <Accordion
        {...accordionProps}
        header={
          <>
            <div ref={ref} className={styles.titleGroup}>
              <div className={styles.title}>{title}</div>
              <div className={styles.subtitle}>{subtitle}</div>
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
        {children}
      </Accordion>
    )
  }
)

export default WizardAccordion
