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
  placeholder,
  isDisabled,
  hasError,
  onChange,
  onFocus,
  onClick,
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
        { [styles.error]: hasError },
      )}
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      disabled={isDisabled}
      onFocus={onFocus}
      onClick={onClick}
      ref={ref}
      placeholder={placeholder}
    />
    {hasError && <div className={styles.errorMessage}>{errorMessage}</div>}
  </div>
))

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  hasError: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onClick: PropTypes.func,
}

Input.defaultProps = {
  id: '',
  name: '',
  type: '',
  value: '',
  errorMessage: '',
  label: '',
  placeholder: '',
  isDisabled: false,
  hasError: false,
  onChange: () => {},
  onFocus: () => {},
  onClick: () => {},
}

export default Input
