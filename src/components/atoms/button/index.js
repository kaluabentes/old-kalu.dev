import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'

import styles from './styles.css'

const Button = ({
  href, onClick, children, router
}) => {
  const handleNavigation = () => {
    // eslint-disable-next-line no-console
    alert(`> Routing to ${href}`)
    router.push(href)
  }

  return (
    <button className={styles.button} onClick={href ? handleNavigation : onClick} type="button">
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  router: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired
}

Button.defaultProps = {
  onClick: () => {},
  href: undefined,
}

export default withRouter(Button)
