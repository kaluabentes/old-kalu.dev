class ImageReader {
  file = undefined
  fileReader = undefined

  constructor(file) {
    this.file = file
    this.fileReader = new FileReader()
  }

  getBase64() {
    return new Promise((resolve, reject) => {
      this.fileReader.addEventListener("load", e => {
        resolve(e.target.result)
      })

      this.fileReader.addEventListener("error", e => {
        reject(this.fileReader.error)
      })

      this.fileReader.readAsDataURL(this.file)
    })
  }
}

export default ImageReader
