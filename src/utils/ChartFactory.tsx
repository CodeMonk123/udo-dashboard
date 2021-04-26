import { XCharts } from '@/components'

export default function ChartFactory(
  gridArea: string = 'auto',
  option: any = {}
) {
  return <XCharts style={{ gridArea }} option={option} />
}
