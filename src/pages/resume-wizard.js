import React, { Component } from 'react'

import Page from '_templates/page'
import PageTitle from '_atoms/page-title'
import Container from '_atoms/container'
import FormSection from '_molecules/form-section'
import Input from '_atoms/input'
import TextArea from '_atoms/text-area'
import FormDescription from '_atoms/form-description'
import EmploymentWizard from '_molecules/employment-wizard'
import AddButton from '_atoms/add-button'
import UploadPhotoField from '_atoms/upload-photo-field'

class ResumeWizard extends Component {
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
  }

  constructor(props) {
    super(props)

    this.handleEmploymentAdd = this.handleEmploymentAdd.bind(this)
    this.handleEmploymentRemove = this.handleEmploymentRemove.bind(this)
    this.handleEmploymentChange = this.handleEmploymentChange.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handlePhotoLoad = this.handlePhotoLoad.bind(this)
  }

  handleEmploymentToggle(index) {
    this.setState(prevState => ({
      employments: prevState.employments.map((employment, currentIndex) => {
        if (index === currentIndex) {
          employment.isOpen = !employment.isOpen
        }

        return employment
      })
    }))
  }

  handleEmploymentAdd() {
    this.setState(prevState => {
      const employments = prevState.employments.map(
        employment => ({...employment, isOpen: false})
      )
      
      return {
        employments: [...employments, {
          jobTitle: '',
          employer: '',
          city: '',
          startDate: '',
          endDate: '',
          description: '',
          isOpen: true,
        }]
      }
    })
  }

  handleEmploymentRemove(index) {
    this.setState(prevState => ({
      employments: prevState.employments.filter(
        (employment, currentIndex) => index !== currentIndex
      )
    }))
  }

  handleEmploymentChange(index, name, value) {
    this.setState(prevState => ({
      employments: prevState.employments.map((employment, currentIndex) => {
        if (index === currentIndex) {
          employment = { ...employment, [name]: value }
        }

        return employment
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
      <Page title="Resume Wizard">
        <Container>
          <PageTitle>Resume Wizard</PageTitle>
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
            {employments.map(({ isOpen, ...employment }, index) => (
              <EmploymentWizard
                key={index}
                isOpen={isOpen}
                employment={employment}
                onToggle={() => this.handleEmploymentToggle(index)}
                onChange={(name, value) => this.handleEmploymentChange(index, name, value)}
                onRemove={() => this.handleEmploymentRemove(index)}
              />
            ))}
            <AddButton onClick={this.handleEmploymentAdd}>Add employment</AddButton>
          </FormSection>
        </Container>
      </Page>
    )
  }
}

export default ResumeWizard
