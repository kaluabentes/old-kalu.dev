import { useEffect } from 'react'

export default (inputRef, hasFocus, onFocus) => {
  let alreadyScrolled = false

  useEffect(() => {
    if (!alreadyScrolled) {
      setTimeout(() => {
        if (inputRef.current) {
          window.scrollTo(0, inputRef.current.offsetTop - 100)
          alreadyScrolled = true
        }
      }, 300)
    }

    if (hasFocus) {
      inputRef.current.focus()
      onFocus()
    }
  })
}
