import React, { createRef } from 'react'
import PropTypes from 'prop-types'

import WizardAccordion from '_molecules/wizard-accordion'
import Input from '_atoms/input'
import useInputFocus from '_hooks/use-input-focus'

const LinkWizard = ({
  link,
  onChange,
  ...wizardAccordionProps
}) => {
  const { onRemove, onToggle, isOpen } = wizardAccordionProps
  const firstInputRef = createRef()

  useInputFocus(firstInputRef)

  const handleChange = (event) => {
    onChange(event.target.name, event.target.value)
  }

  return (
    <WizardAccordion
      title={link.label}
      subtitle={link.url}
      isOpen={isOpen}
      onToggle={onToggle}
      onRemove={onRemove}
    >
      <Input
        id="linkLabel"
        name="label"
        label="Label"
        value={link.label}
        onChange={handleChange}
        ref={firstInputRef}
      />
      <Input
        id="linkUrl"
        name="url"
        label="Link"
        value={link.url}
        onChange={handleChange}
      />
    </WizardAccordion>
  )
}

LinkWizard.propTypes = {
  link: PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
  }),
  onChange: PropTypes.func,
}

LinkWizard.defaultProps = {
  link: {
    label: '',
    url: '',
  },
  onChange: () => {},
}

export default LinkWizard
