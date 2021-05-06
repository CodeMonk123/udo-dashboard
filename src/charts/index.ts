import { EChartsOption } from 'echarts'
import AreaLine from './AreaLine'
import temperature from './TemperatureChart'
import SmoothLine from './SmoothLine'
import StackLine from './StackLine'

interface ChartConfig {
  grid: string
  option: EChartsOption
}


export default [
  {
    grid: '1/1/7/21',
    option: temperature,
  },
  {
    grid: '7/1/14/21',
    option: SmoothLine,
  },
  {
    grid: '14/1/21/21',
    option: AreaLine,
  },
] as ChartConfig[]
