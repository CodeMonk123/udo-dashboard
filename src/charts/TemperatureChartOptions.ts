import { EChartsOption } from 'echarts'
import { Listen } from '@/components/XCharts/listen'
import { fetchData } from '@/requests'
import {FetchData} from '../utils/Fetch'

export default {
  xAxis: {
    type: 'category',
    data: ['1','2','3','4','5','6','7','8','9'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: Listen((prev) => {
        console.log(prev)
        return [150, 230, 224, 218, 135, 147, 260]
      }, 5000),
      type: 'line',
      smooth: true,
    },
  ],
  animation: true,
} as EChartsOption
