import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import styles from './styles.css'

const Button = ({
  onClick,
  children,
  href
}) => {
  if (href) {
    return (
      <Link href={href}>
        <a
          href={href}
          className={styles.button}
          onClick={onClick}
        >
          {children}
        </a>
      </Link>
    )
  }

  return (
    <button
      className={styles.button}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  router: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  href: PropTypes.string,
}

Button.defaultProps = {
  onClick: () => {},
  href: undefined,
}

export default Button
