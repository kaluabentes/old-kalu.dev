import React from 'react'
import Link from 'next/link'

import Container from '_atoms/container'
import Section from '_molecules/section'
import SectionTitle from '_atoms/section-title'
import Paper from '_atoms/paper'

import styles from './styles.css'

const Articles = () => (
  <Section>
    <Container>
      <SectionTitle>Articles</SectionTitle>
      <div className={styles.grid}>
        {[1, 2, 3].map((val, key) => (
          <Link href="/" key={key}>
            <Paper className={styles.article}>
              <a>
                <article>
                  <div className={styles.publicationDate}>
                    <div className={styles.publicationDateDay}>15</div>
                    <div className={styles.publicationDateMonth}>Mar</div>
                  </div>
                  <img
                    className={styles.articleImage}
                    src="http://lorempixel.com/400/300/sports/"
                  />
                  <div className={styles.articleContent}>
                    <h3 className={styles.articleTitle}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h3>
                    <div className={styles.articleReadMore}>> Read more</div>
                  </div>
                </article>
              </a>
            </Paper>
          </Link>
        ))}
      </div>
    </Container>
  </Section>
)

export default Articles
