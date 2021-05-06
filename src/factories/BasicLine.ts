import { EChartsOption } from 'echarts'

export default function () {
  return {
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
  } as EChartsOption
}
