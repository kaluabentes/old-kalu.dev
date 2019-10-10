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
import AddButton from '_atoms/add-button'
import UploadPhotoField from '_atoms/upload-photo-field'

class ResumeCreator extends Component {
  WIZARD_DEFAULT_VALUES = {
    employments: {
      jobTitle: '',
      employer: '',
    },
    educations: {
      school: '',
      degree: '',
    }
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
          startDate: '',
          endDate: '',
          description: '',
          isOpen: true,
          hasFocus: true,
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

  handleWizardFocus(collection, index) {
    this.setState(prevState => ({
      [collection]: prevState[collection].map(
        (item, currentIndex) => {
          if (index === currentIndex) {
            item.hasFocus = false
          }

          return item
        }
      )
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
                hasFocus={hasFocus}
                employment={employment}
                onToggle={() => this.handleWizardToggle('employments', index)}
                onChange={(name, value) => this.handleWizardChange('employments', index, name, value)}
                onRemove={() => this.handleWizardRemove('employments', index)}
                onFocus={() => this.handleWizardFocus('employments', index)}
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
                hasFocus={hasFocus}
                education={education}
                onToggle={() => this.handleWizardToggle('educations', index)}
                onChange={(name, value) => this.handleWizardChange('educations', index, name, value)}
                onRemove={() => this.handleWizardRemove('educations', index)}
                onFocus={() => this.handleWizardFocus('educations', index)}
              />
            ))}
            <AddButton onClick={() => this.handleWizardAdd('educations')}>Add employment</AddButton>
          </FormSection>
        </Container>
      </Page>
    )
  }
}

export default ResumeCreator
