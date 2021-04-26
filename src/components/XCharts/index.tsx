import { CSSProperties, useEffect, useRef } from 'react'
import { init, ECharts } from 'echarts'

interface Props {
  source: any
  style?: CSSProperties
  className?: string
  theme?: string
  configuration?: any
}

export default function XCharts({
  source = {},
  theme,
  configuration,
  className,
  style,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const echartsRef = useRef<ECharts>(null)

  useEffect(() => {
    echartsRef.current = init(containerRef.current, theme, configuration)
  }, [])

  useEffect(() => {
    echartsRef.current.setOption(source)
  }, [source])

  return (
    <div className={'XCharts ' + className} style={style} ref={containerRef} />
  )
}
