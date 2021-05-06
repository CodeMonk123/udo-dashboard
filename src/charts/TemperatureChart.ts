import { Listen } from '@/components/XCharts/listen'
import { EChartsOption } from 'echarts'
import FetchData from '@/utils/Fetch'

const options:EChartsOption = {
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
}

export default Listen(
  options,
  async (prev:any) => {
    console.log(prev)

    let prevXAxis:string[] = prev.xAxis.data
    console.log(prevXAxis)
    let seriesData:number[] = prev.series[0].data
    
    const currentTime = new Date(Date.now()).toDateString()
    let value = await FetchData('Air_purifier_123_Temperature')

    prevXAxis.push(currentTime)
    seriesData.push(value)


    return {
      xAxis: {
        data: prevXAxis
      },

      series: [
        {
          data: seriesData
        },
      ],
    }
  }
, 3000)
