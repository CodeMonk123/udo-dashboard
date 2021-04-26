import AreaLine from './AreaLine'
import BasicLine from './BasicLine'
import SmoothLine from './SmoothLine'
import StackLine from './StackLine'

export default [
  {
    grid: '1/1/5/5',
    option: BasicLine,
  },
  {
    grid: '5/1/11/6',
    option: SmoothLine,
  },
  {
    grid: '1/5/5/11',
    option: AreaLine,
  },
  {
    grid: '5/6/11/11',
    option: StackLine,
  },
]
