import { XCharts } from '@/components'

export default function Basic() {
  return (
    <div>

    <h2>AQI</h2>
    <XCharts
      source={{
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {},
          },
        ],
      }}
      style={{
        width: '1000px',
        height: '400px',
      }}
    />

    <h2>Temperature</h2>
    <XCharts
      source={{
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {},
          },
        ],
      }}
      style={{
        width: '1000px',
        height: '400px',
      }}
    />

    <h2>Humidity</h2>
    <XCharts
      source={{
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {},
          },
        ],
      }}
      style={{
        width: '1000px',
        height: '400px',
      }}
    />
    </div>
  )
}
