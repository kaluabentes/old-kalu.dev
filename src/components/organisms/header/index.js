import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Link from 'next/link'
import { withRouter } from 'next/router'

import Container from '_atoms/container'

import styles from './styles.css'

class Header extends Component {
  state = {
    isNavOpen: false,
    currentPath: '',
  }

  static propTypes = {
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        path: PropTypes.string,
        text: PropTypes.string,
      })
    ),
  }

  componentDidMount() {
    const { router } = this.props
    this.setState({
      currentPath: router.asPath,
    })
  }

  isCurrentNavItem(path) {
    const { currentPath } = this.state
    return currentPath == path
  }

  handleNavToggle = () => {
    this.setState(prevState => ({
      isNavOpen: !prevState.isNavOpen,
    }))
  }

  render() {
    const { routes } = this.props
    const { isNavOpen } = this.state

    return (
      <header className={styles.header}>
        <Container>
          <div className={styles.headerInner}>
            <h1 className={styles.brand}>KALUX</h1>
            <button onClick={this.handleNavToggle} className={styles.navToggler}>
              <span />
              <span />
              <span />
            </button>
            <nav className={classNames(styles.nav, { [styles.navOpen]: isNavOpen })}>
              {routes.map(route => (
                <Link href={route.path} key={route.path}>
                  <a
                    className={classNames(styles.navItem, {
                      [styles.navItemCurrent]: this.isCurrentNavItem(route.path),
                    })}
                  >
                    {route.text}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
        </Container>
      </header>
    )
  }
}

export default withRouter(Header)
