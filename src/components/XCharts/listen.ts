import { MutableRefObject } from 'react'
import { ECharts, EChartsOption } from 'echarts'
import { XOR } from '@/utils/type'

export const __listen__ = Symbol('listen to data source')

type Sync<T> = (pre: undefined | T) => T
type Async<T> = (pre: undefined | T) => Promise<T>

export function Listen<T>(listener: XOR<Sync<T>, Async<T>>, interval = 1000) {
  return {
    [__listen__]: true,
    listener,
    interval,
  }
}

export default function DataListener(
  echartsRef: MutableRefObject<ECharts>,
  option: EChartsOption
) {
  const { series } = option
  const ListenerSet = new Set<NodeJS.Timeout>()

  function listen(serie) {
    const { data: dataSource } = serie

    if (!dataSource[__listen__]) {
      echartsRef.current.setOption(option)
      return
    }

    const { listener, interval } = dataSource

    serie.data = null

    async function trigger() {
      serie.data = await listener(serie.data)
      echartsRef.current.setOption(option)
    }

    trigger()

    ListenerSet.add(setInterval(trigger, interval))
  }

  if (Array.isArray(series)) {
    series.forEach(listen)
  } else if (series !== undefined) {
    listen(series)
  } else return

  return function clear() {
    ListenerSet.forEach(clearInterval)
  }
}
