import React from 'react'
import PropTypes from 'prop-types'

import Container from '_atoms/container'
import Section from '_molecules/section'
import SectionTitle from '_atoms/section-title'
import Paper from '_atoms/paper'
import Actionable from '_atoms/actionable'
import styles from './styles.css'

const Projects = ({ projects }) => (
  <Section>
    <Container>
      <SectionTitle>Projects</SectionTitle>
      <div className={styles.grid}>
        {projects.map((project) => (
          <Actionable>
            <Paper>
              <div className={styles.project}>
                <img className={styles.projectImage} alt={project.title} src={project.image} />
                <div className={styles.projectLegend}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <a
                    className={styles.projectLink}
                    href={project.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {project.url}
                  </a>
                </div>
              </div>
            </Paper>
          </Actionable>
        ))}
      </div>
    </Container>
  </Section>
)

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
      image: PropTypes.string,
      description: PropTypes.string,
    }),
  ).isRequired,
}

export default Projects
