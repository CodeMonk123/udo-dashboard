import { Listen } from '@/components/XCharts/listen'

export default Listen(
  {
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
  },
  () => {
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
