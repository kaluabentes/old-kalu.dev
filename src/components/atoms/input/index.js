import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const Input = forwardRef(({
  id,
  name,
  type,
  value,
  errorMessage,
  label,
  onChange,
  isDisabled,
  hasError,
  hasAutoFocus,
}, ref) => (
  <div className={styles.container}>
    {label && (
      <label
        htmlFor={id}
        className={styles.label}
      >
        {label}
      </label>
    )}
    <input
      className={classNames(
        styles.input,
        { [styles.error]: hasError }
      )}
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      disabled={isDisabled}
      autoFocus={hasAutoFocus}
      ref={ref}
    />
    {hasError && <div className={styles.errorMessage}>{errorMessage}</div>}
  </div>
))

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  hasError: PropTypes.bool,
  hasAutoFocus: PropTypes.bool,
  inputRef: PropTypes.object,
}

Input.defaultProps = {
  className: undefined,
  id: undefined,
  name: undefined,
  type: undefined,
  value: '',
  errorMessage: undefined,
  label: undefined,
  onChange: () => {},
  isDisabled: false,
  hasError: false,
  hasAutoFocus: false,
  inputRef: {},
}

export default Input
