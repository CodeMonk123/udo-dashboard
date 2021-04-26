import { CSSProperties, useEffect, useRef } from 'react'
import { init, ECharts } from 'echarts'

interface Props {
  option: any
  style?: CSSProperties
  className?: string
  theme?: string
  configuration?: any
}

export default function XCharts({
  option = {},
  theme,
  configuration,
  className,
  style,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const echartsRef = useRef<ECharts>(null)

  useEffect(() => {
    // 初始化 echarts 实例
    echartsRef.current = init(containerRef.current, theme, configuration)

    // 获取 div 容器初始尺寸
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

    function resizeHandler() {
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

    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
      echartsRef.current.dispose()
    }
  }, [])

  useEffect(() => {
    echartsRef.current.setOption(option)
  }, [option])

  return (
    <div className={'XCharts ' + className} style={style} ref={containerRef} />
  )
}
