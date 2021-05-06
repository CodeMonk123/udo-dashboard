import { EChartsOption } from 'echarts'

export default function (title: string) {
  return {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [],
        type: 'line',
        areaStyle: {},
      },
    ],
    title: { text: title },
  } as EChartsOption
}
