import { EChartsOption } from 'echarts'
import AreaLine from './AreaLine'
import BasicLine from './BasicLine'
import SmoothLine from './SmoothLine'
import StackLine from './StackLine'

interface ChartConfig {
  grid: string
  option: EChartsOption
}

export default [
  {
    grid: '1/1/11/11',
    option: BasicLine,
  },
  {
    grid: '1/11/11/21',
    option: SmoothLine,
  },
  {
    grid: '11/1/21/11',
    option: AreaLine,
  },
  {
    grid: '11/11/21/21',
    option: StackLine,
  },
] as ChartConfig[]
