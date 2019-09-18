import React from 'react'
import Link from 'next/link'

import Container from '_atoms/container'

import styles from './styles.css'

const LatestArticles = () => (
  <Container>
    <h2 className={styles.title}>Latest Articles</h2>
    <div className={styles.grid}>
      {[1, 2, 3].map((val, key) => (
        <Link href="/" key={key}>
          <a className={styles.article}>
            <article>
              <img className={styles.articleImage} src="http://lorempixel.com/400/300/sports/" />
              <div className={styles.articleContent}>
                <h3 className={styles.articleTitle}>Lorem ipsun</h3>
                <p className={styles.articleExcerpt}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia magna
                  magna, semper malesuada sapien lacinia sit amet. Nulla in consequat nibh.
                </p>
              </div>
            </article>
          </a>
        </Link>
      ))}
    </div>
  </Container>
)

export default LatestArticles
