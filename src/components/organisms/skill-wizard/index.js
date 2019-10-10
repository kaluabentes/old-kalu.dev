import React, { createRef } from 'react'
import PropTypes from 'prop-types'

import WizardAccordion from '_molecules/wizard-accordion'
import Input from '_atoms/input'
import SkillLevelField from '_atoms/skill-level-field'
import useInputFocus from '_hooks/use-input-focus'

const SkillWizard = ({ 
  skill, 
  onChange,
  ...wizardAccordionProps
}) => {
  const firstInputRef = createRef()

  useInputFocus(firstInputRef)

  const handleChange = event => {
    onChange(event.target.name, event.target.value)
  }

  const handleSkillChange = value => {
    onChange('level', value)
  }

  return (
    <WizardAccordion
      title={skill.name}
      subtitle={SkillLevelField.levels[skill.level - 1].label}
      {...wizardAccordionProps}
    >
      <Input
        id="skillName"
        name="name"
        label="Skill"
        value={skill.name} 
        onChange={handleChange}
        ref={firstInputRef}
      />
      <SkillLevelField
        id="skillLevel"
        name="level"
        label="Level"
        value={skill.level}
        onChange={handleSkillChange}
      />
    </WizardAccordion>
  )
}

SkillWizard.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string,
    level: PropTypes.number,
  }), 
  onChange: PropTypes.func,
}

SkillWizard.defaultProps = {
  skill: {
    name: '',
    level: 1,
  }, 
  onChange: () => {},
}

export default SkillWizard
