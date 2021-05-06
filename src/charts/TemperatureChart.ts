import dayjs from 'dayjs'
import { Listen } from '@/components/XCharts/listen'
import { BasicLine } from '@/factories'
import { airpurifier } from '@/requests'

export default Listen(
  BasicLine(),
  async prev => {
    let prevXAxis: string[] = prev.xAxis.data
    let seriesData: number[] = prev.series[0].data

    const currentTime = dayjs().format('YYYY-MM-DD')

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
  3000
)
