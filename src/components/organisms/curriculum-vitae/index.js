import React from 'react'
import PropTypes from 'prop-types'

import CurriculumVitaeHeader from '_molecules/curriculum-vitae-header'

const CurriculumVitae = ({
  photo,
  name,
  jobTitle,
}) => (
  <article>
    <CurriculumVitaeHeader
      photo={photo}
      name={name}
      jobTitle={jobTitle}
    />
  </article>
)

CurriculumVitae.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  jobTitle: PropTypes.string,
}

CurriculumVitae.defaultProps = {
  photo: '',
  name: '',
  jobTitle: '',
}

export default CurriculumVitae
