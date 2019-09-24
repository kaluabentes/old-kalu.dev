import React from 'react'
import Link from 'next/link'

import Container from '_atoms/container'

import styles from './styles.css'

const Articles = () => (
  <Container>
    <h2 className={styles.title}>Articles</h2>
    <div className={styles.grid}>
      {[1, 2, 3].map((val, key) => (
        <Link href="/" key={key}>
          <a className={styles.article}>
            <article>
              <img className={styles.articleImage} src="http://lorempixel.com/400/300/sports/" />
              <div className={styles.articleContent}>
                <h3 className={styles.articleTitle}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h3>
                <div className={styles.articleReadMore}>> Read more</div>
              </div>
            </article>
          </a>
        </Link>
      ))}
    </div>
  </Container>
)

export default Articles
