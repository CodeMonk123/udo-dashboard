import { MutableRefObject } from 'react'
import { ECharts } from 'echarts'

export default function ResizeHandlerFactory(
  containerRef: MutableRefObject<HTMLDivElement>,
  echartsRef: MutableRefObject<ECharts>
) {
  const {
    width: initialWidth,
    height: initialHeight,
  } = containerRef.current.getBoundingClientRect()

  // resize 事件节流指示器
  const indicator = {
    enabled: true,
    lastWidth: initialWidth,
    lastHeight: initialHeight,
  }

  return function resizeHandler() {
    if (!indicator.enabled) return

    indicator.enabled = false

    const { width, height } = containerRef.current.getBoundingClientRect()

    if (
      Math.abs(indicator.lastWidth - width) > 0.5 ||
      Math.abs(indicator.lastHeight - height) > 0.5
    ) {
      indicator.lastWidth = width
      indicator.lastHeight = height

      echartsRef.current.resize({
        width,
        height,
      })
    }

    setTimeout(() => {
      indicator.enabled = true
    }, 250)
  }
}
