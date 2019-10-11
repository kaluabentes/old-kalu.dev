import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const CurriculumVitaeSectionTitle = ({ children }) => (
  <h5 className={styles.title}>{children}</h5>
)

CurriculumVitaeSectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CurriculumVitaeSectionTitle
