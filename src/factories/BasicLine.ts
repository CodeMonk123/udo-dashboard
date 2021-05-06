import { EChartsOption } from 'echarts'

export default function (title: string) {
  return {
    xAxis: {
      type: 'category',
      data: [],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [],
        type: 'line',
      },
    ],

    animation: true,

    title: {
      text: title,
    },
  } as EChartsOption
}
