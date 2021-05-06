import { EChartsOption } from 'echarts'
import { Listen } from '@/components/XCharts/listen'
import { fetchData } from '@/requests'

export default {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: Listen((prev) => {
        console.log(prev)
        return [150, 230, 224, 218, 135, 147, 260]
      }, 2000),
      type: 'line',
    },
  ],
  animation: true,
} as EChartsOption
