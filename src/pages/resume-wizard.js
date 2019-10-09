import React, { Component } from 'react'

import Page from '_templates/page'
import PageTitle from '_atoms/page-title'
import Container from '_atoms/container'
import FormSection from '_molecules/form-section'
import Input from '_atoms/input'
import TextArea from '_atoms/text-area'
import FormDescription from '_atoms/form-description'
import EmploymentWizard from '_molecules/employment-wizard'

class ResumeWizard extends Component {
  state = {
    employments: [
      {
        jobTitle: 'Frontend Develoer',
        employer: 'Cheesecake Labs',
        city: 'Florianópolis',
        startDate: 'Oct, 2018',
        endDate: 'Oct, 2019',
        description: '',
        isOpen: false,
      }
    ],
  }

  handleEmploymentToggle = index => {
    this.setState(prevState => ({
      employments: prevState.employments.map((employment, currIndex) => {
        if (index === currIndex) {
          employment.isOpen = !employment.isOpen
        }

        return employment
      })
    }))
  }

  render() {
    const { employments } = this.state

    return (
      <Page title="Resume Wizard">
        <Container>
          <PageTitle>Resume Wizard</PageTitle>
          <FormSection title="Personal Details">
            <Input id="firstName" name="firstName" label="First Name" />
            <Input id="lastName" name="lastName" label="Last Name" />
            <Input id="photo" name="photo" label="Photo" type="file" />
            <Input id="jobTitle" name="jobTitle" label="Job Title" />
            <Input id="email" name="email" label="Email" type="email" />
            <Input id="phone" name="phone" label="Phone" type="tel" />
          </FormSection>
          <FormSection title="Professional Summary">
            <TextArea label="Include 2-3 clear sentences about your overall exerience"></TextArea>
          </FormSection>
          <FormSection title="Employment History">
            <FormDescription>Include your last 10 years of relevant experience and dates in this section. List your most recent position first.</FormDescription>
            {employments.map(({ isOpen, ...employment }, index) => (
              <EmploymentWizard
                key={index}
                isOpen={isOpen}
                employment={employment}
                onToggle={() => this.handleEmploymentToggle(index)}
              />
            ))}
          </FormSection>
        </Container>
      </Page>
    )
  }
}

export default ResumeWizard
