import { XCharts } from '@/components'
import charts from '@/charts'
import './App.less'

export default function App() {


  return (
    <div className="App">
      {charts.map(({ grid = 'auto', option = {} }, index) => (
        <XCharts
          style={{ gridArea: grid }}
          option={option}
          key={grid + '-' + index}
        />
      ))}
    </div>
  )
}
