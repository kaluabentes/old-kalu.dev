import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

import styles from './styles.css'

const Button = ({
  onClick,
  children,
  href
}) => {
  const router = useRouter()

  const handleClick = () => {
    if (href) {
      router.push(href)
      return
    }

    onClick()
  }

  return (
    <button className={styles.button} onClick={handleClick} type="button">
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
