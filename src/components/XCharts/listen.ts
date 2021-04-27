import { MutableRefObject } from 'react'
import { ECharts, EChartsOption } from 'echarts'
import { XOR } from '@/utils/type'

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
  // const { series } = option
  // const ListenerSet = new Set<NodeJS.Timeout>()
  // function listen(serie) {
  //   const { data: dataSource } = serie
  //   if (!dataSource[__listen__]) {
  //     echartsRef.current.setOption(option)
  //     return
  //   }
  //   const { listener, interval } = dataSource
  //   serie.data = null
  //   async function trigger() {
  //     serie.data = await listener(serie.data)
  //     echartsRef.current.setOption(option)
  //   }
  //   trigger()
  //   ListenerSet.add(setInterval(trigger, interval))
  // }
  // if (Array.isArray(series)) {
  //   series.forEach(listen)
  // } else if (series !== undefined) {
  //   listen(series)
  // } else return
  // return function clear() {
  //   ListenerSet.forEach(clearInterval)
  // }
}
