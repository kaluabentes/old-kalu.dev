class ImageReader {
  constructor(file) {
    this.file = file
    this.fileReader = new FileReader()
  }

  getBase64() {
    return new Promise((resolve, reject) => {
      this.fileReader.addEventListener('load', (event) => {
        resolve(event.target.result)
      })

      this.fileReader.addEventListener('error', () => {
        reject(this.fileReader.error)
      })

      this.fileReader.readAsDataURL(this.file)
    })
  }
}

export default ImageReader
