import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const Button = ({ onClick, children, href }) => {
  if (href) {
    return (
      <a href={href} className={styles.button} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button className={styles.button} onClick={onClick} type="button">
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
}

Button.defaultProps = {
  onClick: () => {},
  href: undefined,
}

export default Button
