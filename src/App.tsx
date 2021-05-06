import { XCharts } from '@/components'
import charts from '@/charts'
import './App.less'
import { useEffect } from 'react'
import FetchData from './utils/Fetch'

export default function App() {

  useEffect(()=>{
    FetchData("Air_purifier_123_Temperature").then(
      console.log
    )
  },[])

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
