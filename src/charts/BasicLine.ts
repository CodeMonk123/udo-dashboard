import { Listen } from '@/components/XCharts/listen'
import { EChartsOption } from 'echarts'

const options:EChartsOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [220, 182, 191, 234, 290, 330, 310],
      type: 'line',
    },
  ],
  animation: true,
}

export default Listen(
  options,
  (prev) => {

    console.log(prev)

    return {
      xAxis: {
        data: [
          'Mon',
          'Tue',
          'Wed',
          'Thu',
          'Fri',
          'Sat',
          'Sun' + Math.floor(Math.random() * 10),
        ],
      },

      series: [
        {
          data: [
            220,
            182,
            191,
            234,
            290,
            330,
            Math.floor(Math.random() * 100) + 150,
          ],
        },
      ],
    }
  }
)
