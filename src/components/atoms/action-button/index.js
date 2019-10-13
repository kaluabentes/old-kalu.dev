import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'

import styles from './styles.css'

const ActionButton = ({
  href, onClick, router, icon,
}) => {
  const handleNavigation = () => router.push(href)

  return (
    <button className={styles.button} onClick={href ? handleNavigation : onClick} type="button">
      {icon}
    </button>
  )
}

ActionButton.propTypes = {
  onClick: PropTypes.func,
  href: PropTypes.string,
  icon: PropTypes.node.isRequired,
  router: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired
}

ActionButton.defaultProps = {
  onClick: () => {},
  href: undefined,
}

export default withRouter(ActionButton)
