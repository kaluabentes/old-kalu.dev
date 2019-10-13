const CANVAS_TEMP_CLASSNAME = 'canvasTempClassname'

class PDFTools {
  constructor(element) {
    // this.html2canvas = require('html2canvas')
    // eslint-disable-next-line global-require
    this.canvg = require('canvg')
    // const jsPDF = require('jspdf')

    // this.pdf = new jsPDF()
    this.element = element
    this.svgs = Array.from(this.element.querySelectorAll('svg'))
    // this.html2canvasConfig = {
    //   scrollY: -window.scrollY,
    //   scrollX: 0,
    // }
  }

  convertSvgsToCanvas() {
    this.svgs.forEach((svg) => {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d')

      canvas.className = CANVAS_TEMP_CLASSNAME

      Array.from(svg.querySelectorAll('path')).forEach((path) => {
        path.setAttribute('fill', '#0070f3')
      })

      const xml = (new XMLSerializer())
        .serializeToString(svg)

      this.canvg(canvas, xml, {
        ignoreMouse: true,
        ignoreDimensions: true,
        forceRedraw: () => true
      })

      context.clearRect(0, 0, canvas.width, canvas.height)

      svg.parentNode.insertBefore(canvas, svg)
      // eslint-disable-next-line no-param-reassign
      svg.style.display = 'none'
    })
  }

  removeSvgsCanvas() {
    const svgsCanvas = Array.from(document.querySelectorAll(`.${CANVAS_TEMP_CLASSNAME}`))

    svgsCanvas.forEach((canvas) => {
      canvas.parentNode.removeChild(canvas)
    })

    this.svgs.forEach((svg) => {
      // eslint-disable-next-line no-param-reassign
      svg.style.display = 'block'
    })
  }

  download(filename = 'resume') {
    this.convertSvgsToCanvas()

    return new Promise((resolve) => {
      setTimeout(() => {
        this.html2canvas(this.element, this.html2canvasConfig).then((canvas) => {
          this.removeSvgCanvas()

          const imageData = canvas.toDataURL('image/png')
          const docWidth = this.pdf.internal.pageSize.getWidth()

          this.pdf.addImage(imageData, 'PNG', 0, 0, Math.round(docWidth), 0)
          this.pdf.save(`${filename}.pdf`)
          resolve()
        })
      }, 600)
    })
  }
}

export default PDFTools
