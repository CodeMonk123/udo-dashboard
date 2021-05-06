import { Listen } from '@/components/XCharts/listen'
import { airpurifier } from '@/requests'
import { SmoothLine } from '@/factories'

export default Listen(
  SmoothLine('空气湿度'),
  async (prev: any) => {
    console.log(prev)

    let prevXAxis: string[] = prev.xAxis.data
    console.log(prevXAxis)
    let seriesData: number[] = prev.series[0].data

    const currentTime = new Date(Date.now()).toTimeString().slice(0, 9)
    // let value = await airpurifier.fetch('Air_purifier_123_Humidity')
    let value = 50 + 50 * Math.random()
    prevXAxis.push(currentTime)
    seriesData.push(value)

    if (prevXAxis.length > 30) {
      prevXAxis.shift()
    }
    if (seriesData.length > 30) {
      seriesData.shift()
    }

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
