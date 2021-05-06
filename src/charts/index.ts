import { EChartsOption } from 'echarts'
import temperature from './TemperatureChart'
import humidity from './HumidityChart'
import aqi from './AQIChart'

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
    option: humidity,
  },
  {
    grid: '14/1/21/21',
    option: aqi,
  },
] as ChartConfig[]
