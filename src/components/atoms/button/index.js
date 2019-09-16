import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import styles from './styles.css'

const Button = ({ href, onClick, children }) => {
  const button = (
    <button className={styles.button} onClick={onClick} type="button">
      {children}
    </button>
  )
  const withLink = button => <Link href={href}>{button}</Link>

  if (href) {
    return withLink(button)
  }

  return button
}

Button.propTypes = {
  onClick: PropTypes.func,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  onClick: () => {},
  href: undefined,
}

export default Button
