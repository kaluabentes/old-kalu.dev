import React, { Component, createRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withRouter } from 'next/router'

import Container from '_atoms/container'
import Brand from '_atoms/brand'

import styles from './styles.css'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isNavOpen: false,
      currentPath: '',
      navHeight: undefined,
      hasShadow: false,
    }

    this.navRef = createRef()

    this.handleWindowResize = this.handleWindowResize.bind(this)
    this.handleWindowScroll = this.handleWindowScroll.bind(this)
    this.handleNavToggle = this.handleNavToggle.bind(this)
  }

  componentDidMount() {
    const { router } = this.props

    this.setState({
      currentPath: router.asPath,
      navHeight: this.navRef.current.scrollHeight,
    })

    window.addEventListener('resize', this.handleWindowResize)
    window.addEventListener('scroll', this.handleWindowScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize)
    window.removeEventListener('scroll', this.handleWindowScroll)
  }

  isCurrentNavItem(path) {
    const { currentPath } = this.state
    return currentPath === path
  }

  handleNavToggle() {
    this.setState((prevState) => ({
      isNavOpen: !prevState.isNavOpen,
    }))
  }

  handleWindowResize() {
    this.setState({
      navHeight: this.navRef.current.scrollHeight,
    })
  }

  handleWindowScroll() {
    if (window.scrollY > 300) {
      this.setState({
        hasShadow: true,
      })
      return
    }

    this.setState({
      hasShadow: false,
    })
  }

  render() {
    const { routes, isFixed } = this.props
    const { isNavOpen, hasShadow, navHeight } = this.state

    return (
      <header
        className={
          classNames(
            styles.header,
            {
              [styles.fixed]: isFixed,
              [styles.shadow]: hasShadow
            }
          )
        }
      >
        <Container>
          <div className={styles.headerInner}>
            <Brand />
            <button
              type="button"
              onClick={this.handleNavToggle}
              className={styles.navToggler}
            >
              <span />
              <span />
              <span />
            </button>
            <nav
              ref={this.navRef}
              style={{ height: isNavOpen ? `${navHeight}px` : '0' }}
              className={styles.nav}
            >
              {routes.map((route) => (
                <a
                  href={route.path}
                  className={classNames(styles.navItem, {
                    [styles.navItemCurrent]: this.isCurrentNavItem(route.path),
                  })}
                >
                  {route.text}
                </a>
              ))}
            </nav>
          </div>
        </Container>
      </header>
    )
  }
}

Header.propTypes = {
  router: PropTypes.shape({
    asPath: PropTypes.string,
    push: PropTypes.func,
  }).isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      text: PropTypes.string,
    })
  ),
  isFixed: PropTypes.bool,
}

Header.defaultProps = {
  isFixed: false,
  routes: [],
}

export default withRouter(Header)
