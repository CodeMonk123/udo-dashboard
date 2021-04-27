import { CSSProperties, useEffect, useRef } from 'react'
import { init, ECharts, EChartsOption } from 'echarts'
import ResizeHandlerFactory from './resize'
import ListenDataSource from './listen'

interface Props {
  option: EChartsOption
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

    const resizeHandler = ResizeHandlerFactory(containerRef, echartsRef)
    window.addEventListener('resize', resizeHandler)

    return () => {
      window.removeEventListener('resize', resizeHandler)
      echartsRef.current.dispose()
    }
  }, [])

  useEffect(() => {
    const clear = ListenDataSource(echartsRef, option)

    return clear
  }, [option])

  return (
    <div className={'XCharts ' + className} style={style} ref={containerRef} />
  )
}
