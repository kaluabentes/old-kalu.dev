import React, { createRef, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Spinner from '_atoms/spinner'
import ImageReader from '_utils/image-reader'
import UserIcon from '_atoms/icon/user'
import styles from './styles.css'

const UploadPhotoField = ({ photoSrc, onPhotoLoad }) => {
  const [fileName, setFileName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = createRef()
  const photoElement = photoSrc ? <img className={styles.photo} src={photoSrc} alt="User" /> : <UserIcon />

  const handleClick = () => {
    inputRef.current.click()
  }

  const handleChange = async (event) => {
    const { target: { files: [file] } } = event

    setIsLoading(true)

    const imageReader = new ImageReader(file)
    const imageSrc = await imageReader.getBase64()

    setIsLoading(false)
    onPhotoLoad(imageSrc)
    setFileName(file.name)
  }

  return (
    <button type="button" onClick={handleClick} className={styles.field}>
      {isLoading ? (
        <div className={classNames(styles.spinnerBox, styles.fieldCenter)}>
          <Spinner size={Spinner.sizes.small} />
        </div>
      ) : (
        <div className={styles.photoBox}>
          {photoElement}
        </div>
      )}
      <div className={styles.text}>{fileName || 'Upload photo'}</div>
      <input
        ref={inputRef}
        onChange={handleChange}
        className={styles.input}
        type="file"
        accept="image/x-png,image/gif,image/jpeg, .jpg, .jpeg, .gif, .png, .tiff"
      />
    </button>
  )
}

UploadPhotoField.propTypes = {
  photoSrc: PropTypes.string,
  onPhotoLoad: PropTypes.func,
}

UploadPhotoField.defaultProps = {
  photoSrc: '',
  onPhotoLoad: () => {},
}

export default UploadPhotoField
