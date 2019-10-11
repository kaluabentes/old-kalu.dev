import React from 'react'
import PropTypes from 'prop-types'

import Accordion from '_molecules/accordion'
import ChevronIcon from '_atoms/icon/chevron'
import TrashIcon from '_atoms/icon/trash'

import styles from './styles.css'

const WizardAccordion = ({
  title,
  subtitle,
  onRemove,
  children,
  ...accordionProps
}) => {
  const { isOpen, onToggle } = accordionProps

  const handleRemove = (event) => {
    event.stopPropagation()
    onRemove()
  }

  return (
    <Accordion
      isOpen={isOpen}
      onToggle={onToggle}
      header={(
        <>
          <div className={styles.titleGroup}>
            <div className={styles.title}>{title}</div>
            <div className={styles.subtitle}>{subtitle}</div>
          </div>
          <button type="button" onClick={handleRemove} className={styles.removeButton}>
            <TrashIcon />
          </button>
          <div className={styles.arrowIcon}>
            <ChevronIcon />
          </div>
        </>
      )}
    >
      {children}
    </Accordion>
  )
}

WizardAccordion.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  onRemove: PropTypes.func,
  children: PropTypes.node.isRequired,
}

WizardAccordion.defaultProps = {
  title: '',
  subtitle: '',
  onRemove: () => {},
}

export default WizardAccordion
