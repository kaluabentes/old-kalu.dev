import { useEffect } from 'react'

export default inputRef => {
  useEffect(() => {
    inputRef.current.focus()
    setTimeout(() => {
      if (inputRef.current) {
        window.scrollTo(0, inputRef.current.offsetTop - 100)
      }
    }, 300)
  }, [])
}
