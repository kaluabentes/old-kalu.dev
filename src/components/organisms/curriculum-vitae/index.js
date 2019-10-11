import React from 'react'
import PropTypes from 'prop-types'

import CurriculumVitaeHeader from '_molecules/curriculum-vitae-header'
import CurriculumVitaeProfile from '_molecules/curriculum-vitae-profile'

import styles from './styles.css'

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
    <div className={styles.grid}>
      <div>
        <CurriculumVitaeProfile
          content={`
            I'm a developer since 2013, I love to build beautiful
            UI's and apps that cause a positive impact in the world,
            It drives me, I began working as a full-stack developer
            working with tech such as HTML5, CSS3, JavaScript, PHP,
            Laravel and Joomla CMS. Currently, I've been giving special
            attention to frontend development, I developed a profound
            interest in building good looking and improved user
            experience UI's.
          `}
        />
      </div>
    </div>
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
