import React, { Component } from 'react'

import Page from '_templates/page'
import PageTitle from '_atoms/page-title'
import Container from '_atoms/container'
import FormSection from '_molecules/form-section'
import Input from '_atoms/input'
import TextArea from '_atoms/text-area'
import FormDescription from '_atoms/form-description'
import EmploymentWizard from '_organisms/employment-wizard'
import EducationWizard from '_organisms/education-wizard'
import SkillWizard from '_organisms/skill-wizard'
import LinkWizard from '_organisms/link-wizard'
import AddButton from '_atoms/add-button'
import UploadPhotoField from '_atoms/upload-photo-field'
import MonthYearField from '_molecules/month-year-field'


class ResumeCreator extends Component {
  COMMON_FIELDS = {
    startDate: '',
    endDate: '',
    description: '',
  }

  WIZARD_DEFAULT_VALUES = {
    employments: {
      jobTitle: '',
      employer: '',
      ...this.COMMON_FIELDS,
    },
    educations: {
      school: '',
      degree: '',
      ...this.COMMON_FIELDS,
    },
    skills: {
      name: '',
      level: 1,
    },
    links: {
      name: '',
      level: 1,
    },
  }

  state = {
    firstName: '',
    lastName: '',
    photo: '',
    jobTitle: '',
    email: '',
    phone: '',
    address: '',
    professionalSummary: '',
    employments: [],
    educations: [],
    skills: [],
    links: [],
  }

  constructor(props) {
    super(props)

    this.handleWizardAdd = this.handleWizardAdd.bind(this)
    this.handleWizardRemove = this.handleWizardRemove.bind(this)
    this.handleWizardChange = this.handleWizardChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handlePhotoLoad = this.handlePhotoLoad.bind(this)
  }

  handleWizardToggle(collection, index) {
    this.setState(prevState => ({
      [collection]: prevState[collection].map((item, currentIndex) => {
        if (index === currentIndex) {
          item.isOpen = !item.isOpen
        }

        return item
      })
    }))
  }

  handleWizardAdd(collection) {
    this.setState(prevState => {
      const items = prevState[collection].map(
        item => ({...item, isOpen: false})
      )

      return {
        [collection]: [...items, {
          ...this.WIZARD_DEFAULT_VALUES[collection],
          isOpen: true,
        }]
      }
    })
  }

  handleWizardRemove(collection, index) {
    this.setState(prevState => ({
      [collection]: prevState[collection].filter(
        (item, currentIndex) => index !== currentIndex
      )
    }))
  }

  handleWizardChange(collection, index, name, value) {
    this.setState(prevState => ({
      [collection]: prevState[collection].map((item, currentIndex) => {
        if (index === currentIndex) {
          item = { ...item, [name]: value }
        }

        return item
      })
    }))
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handlePhotoLoad(base64) {
    this.setState({
      photo: base64
    })
  }

  render() {
    const { 
      employments,
      educations,
      skills,
      links,
      firstName,
      lastName,
      photo,
      jobTitle,
      email,
      phone,
      address,
      professionalSummary,
    } = this.state

    return (
      <Page title="Resume Creator">
        <Container>
          <PageTitle>Resume Creator</PageTitle>
          <FormSection title="Personal Details">
            <Input 
              id="firstName" 
              name="firstName" 
              label="First Name" 
              value={firstName} 
              onChange={this.handleInputChange}
            />
            <Input 
              id="lastName" 
              name="lastName" 
              label="Last Name"
              value={lastName}
              onChange={this.handleInputChange}
            />
            <UploadPhotoField photoSrc={photo} onPhotoLoad={this.handlePhotoLoad} />
            <Input 
              id="jobTitle" 
              name="jobTitle" 
              label="Job Title"
              value={jobTitle}
              onChange={this.handleInputChange}
            />
            <Input 
              id="email" 
              name="email" 
              label="Email" 
              type="email"
              value={email}
              onChange={this.handleInputChange} 
            />
            <Input 
              id="phone" 
              name="phone" 
              label="Phone" 
              type="tel"
              value={phone}
              onChange={this.handleInputChange}
            />
            <Input 
              id="address" 
              name="address" 
              label="address" 
              type="Address"
              value={address}
              onChange={this.handleInputChange}
            />
          </FormSection>
          <FormSection title="Professional Summary">
            <TextArea 
              id="professionalSummary"
              name="professionalSummary"
              label="Include 2-3 clear sentences about your overall exerience"
              onChange={this.handleInputChange}
              value={professionalSummary}
            />
          </FormSection>
          <FormSection title="Employment History">
            <FormDescription>
              Include your last 10 years of relevant experience and dates in this section. List your most recent position first.
            </FormDescription>
            {employments.map(({ isOpen, hasFocus, ...employment }, index) => (
              <EmploymentWizard
                key={index}
                isOpen={isOpen}
                employment={employment}
                onToggle={() => this.handleWizardToggle('employments', index)}
                onChange={(name, value) => this.handleWizardChange('employments', index, name, value)}
                onRemove={() => this.handleWizardRemove('employments', index)}
              />
            ))}
            <AddButton onClick={() => this.handleWizardAdd('employments')}>Add employment</AddButton>
          </FormSection>
          <FormSection title="Education">
            <FormDescription>
              If relevant, include your most recent educational achievements and the dates here
            </FormDescription>
            {educations.map(({ isOpen, hasFocus, ...education }, index) => (
              <EducationWizard
                key={index}
                isOpen={isOpen}
                education={education}
                onToggle={() => this.handleWizardToggle('educations', index)}
                onChange={(name, value) => this.handleWizardChange('educations', index, name, value)}
                onRemove={() => this.handleWizardRemove('educations', index)}
              />
            ))}
            <AddButton onClick={() => this.handleWizardAdd('educations')}>Add education</AddButton>
          </FormSection>
          <FormSection title="Skills">
            {skills.map(({ isOpen, hasFocus, ...skill }, index) => (
              <SkillWizard
                key={index}
                isOpen={isOpen}
                skill={skill}
                onToggle={() => this.handleWizardToggle('skills', index)}
                onChange={(name, value) => this.handleWizardChange('skills', index, name, value)}
                onRemove={() => this.handleWizardRemove('skills', index)}
              />
            ))}
            <AddButton onClick={() => this.handleWizardAdd('skills')}>Add skill</AddButton>
          </FormSection>
          <FormSection title="Websites & Social Links">
            <FormDescription>
              You can add links to websites you want hiring managers to see! Perhaps It will be  a link to your portfolio, LinkedIn profile, or personal website
            </FormDescription>
            {links.map(({ isOpen, hasFocus, ...link }, index) => (
              <LinkWizard
                key={index}
                isOpen={isOpen}
                link={link}
                onToggle={() => this.handleWizardToggle('links', index)}
                onChange={(name, value) => this.handleWizardChange('links', index, name, value)}
                onRemove={() => this.handleWizardRemove('links', index)}
              />
            ))}
            <AddButton onClick={() => this.handleWizardAdd('links')}>Add link</AddButton>
          </FormSection>
        </Container>
      </Page>
    )
  }
}

export default ResumeCreator
