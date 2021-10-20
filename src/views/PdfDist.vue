<template>
  <div class="pdf-container">
    <!--此处根据pdf的页数动态生成相应数量的canvas画布-->
    <h1>
     PDF DIST Demo 2
    </h1>
    <canvas
      v-for="pageIndex in pdfPages"
      :id="`pdf-canvas-` + pageIndex"
      :key="pageIndex"
    ></canvas>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import * as PdfJs from 'pdfjs-dist/legacy/build/pdf.js'
import * as PdfjsWorker from 'pdfjs-dist/build/pdf.worker.js'
import 'pdfjs-dist/web/pdf_viewer.css'

PdfJs.GlobalWorkerOptions.workerSrc = PdfjsWorker

// import PDFJSWorker from 'pdfjs-dist/build/ps
// eslint-disable-next-line @typescript-eslint/no-var-requires

@Options({})
export default class MultiPage extends Vue {
  // eslint-disable-next-line
  pdfDoc: any = '' // 保存加载的pdf文件流
  pdfPages = 0 // pdf文件的页数
  pdfScale = 1.0 // 缩放比例

  // class 组件中生命周期函数直接这样写
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  created () {
    this.loadFile('http://127.0.0.1:5500/src/assets/pdf/XD2.pdf')
  }

  loadFile (url: string): void {
    PdfJs.GlobalWorkerOptions.workerSrc = require('pdfjs-dist/build/pdf.worker.entry')
    console.log(PdfJs.GlobalWorkerOptions)
    const loadingTask = PdfJs.getDocument(url)
    loadingTask.promise.then(pdf => {
      this.pdfDoc = pdf
      this.pdfPages = this.pdfDoc.numPages
      this.$nextTick(() => {
        this.renderPage(1) // 表示渲染第 1 页
      })
    })
  }
  // eslint-disable-next-line
  renderPage (num: any) {
    // eslint-disable-next-line
    this.pdfDoc.getPage(num).then((page: any) => {
      const canvasId = 'pdf-canvas-' + num
      // eslint-disable-next-line
      const canvas: any = document.getElementById(canvasId)
      // eslint-disable-next-line
      const ctx: any = canvas.getContext('2d')
      const dpr = window.devicePixelRatio || 1
      const bsr =
        ctx.webkitBackingStorePixelRatio ||
        ctx.mozBackingStorePixelRatio ||
        ctx.msBackingStorePixelRatio ||
        ctx.oBackingStorePixelRatio ||
        ctx.backingStorePixelRatio ||
        1
      const ratio = dpr / bsr
      const viewport = page.getViewport({ scale: this.pdfScale })
      canvas.width = viewport.width * ratio
      canvas.height = viewport.height * ratio
      canvas.style.width = viewport.width + 'px'
      canvas.style.height = viewport.height + 'px'
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
      const renderContext = {
        canvasContext: ctx,
        viewport: viewport
      }
      page.render(renderContext)
      if (num < this.pdfPages) {
        this.renderPage(num + 1)
      }
    })
  }
}
</script>
