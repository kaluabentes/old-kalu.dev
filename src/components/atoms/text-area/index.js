import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from '_atoms/input/styles.css'

const TextArea = ({
  id,
  name,
  value,
  errorMessage,
  label,
  onChange,
  isDisabled,
  hasError,
}) => (
  <div className={styles.container}>
    {label && <label className={styles.label} htmlFor={id}>{label}</label>}
    <textarea
      rows={5}
      className={classNames(
        styles.input,
        { [styles.error]: hasError }
      )}
      id={id}
      name={name}
      onChange={onChange}
      disabled={isDisabled}
    >
      {value}
    </textarea>
    {hasError && <div className={styles.errorMessage}>{errorMessage}</div>}
  </div>
)

TextArea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  hasError: PropTypes.bool,
}

TextArea.defaultProps = {
  className: undefined,
  id: undefined,
  name: undefined,
  value: '',
  errorMessage: undefined,
  label: undefined,
  onChange: () => {},
  isDisabled: false,
  hasError: false,
}

export default TextArea