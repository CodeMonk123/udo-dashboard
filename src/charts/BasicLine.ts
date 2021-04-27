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
      data: Listen(() => fetchData('/mock/data'), 2000),
      type: 'line',
    },
  ],
  animation: true,
} as EChartsOption
