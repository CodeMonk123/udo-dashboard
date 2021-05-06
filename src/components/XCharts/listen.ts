import { MutableRefObject } from 'react'
import { ECharts, EChartsOption } from 'echarts'

export const __listen__ = Symbol('listen to data source')

type Listener = (pre: EChartsOption) => any

function deepAssign<T>(target: T, source: unknown) {
  for (const key of Object.keys(source))
    source[key] instanceof Object &&
      Object.assign(source[key], deepAssign(target[key], source[key]))
  return Object.assign(target || {}, source)
}

export function Listen(
  initial: EChartsOption,
  listener: Listener,
  interval = 1000
) {
  return {
    [__listen__]: true,
    initial,
    listener,
    interval,
  }
}

export default function ListenOption(
  echartsRef: MutableRefObject<ECharts>,
  option: any
) {
  const optionRef = {
    current: (option[__listen__] ? option.initial : option) as EChartsOption,
  }

  echartsRef.current.setOption(optionRef.current)

  if (!option[__listen__]) return

  const { listener, interval } = option

  const timeout = setInterval(
    async () =>
      echartsRef.current.setOption(
        (optionRef.current = deepAssign(
          optionRef.current,
          await listener(optionRef.current)
        ))
      ),
    interval
  )

  return () => clearInterval(timeout)
}
