import dayjs from 'dayjs'
import { Listen } from '@/components/XCharts/listen'
import { BasicLine } from '@/factories'
import { airpurifier } from '@/requests'

export default Listen(
  BasicLine('室温(摄氏度)'),
  async (prev: any) => {
    let prevXAxis: string[] = prev.xAxis.data
    let seriesData: number[] = prev.series[0].data

    const currentTime = new Date(Date.now()).toTimeString().slice(0, 9)

    let value = await airpurifier.fetch('Air_purifier_123_Temperature')

    prevXAxis.push(currentTime)
    seriesData.push(value)

    return {
      xAxis: {
        data: prevXAxis,
      },

      series: [
        {
          data: seriesData,
        },
      ],
    }
  },
  1500
)
