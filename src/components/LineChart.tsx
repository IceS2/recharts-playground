
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

type LineChartProps = {
  width: number,
  height: number,
  data: Object[],
  dataKeys: {"key": string, "name": string}[],
  xAxisDataKey: string,
}

function MyLineChart(props: LineChartProps) {
  return (
    <LineChart width={props.width} height={props.height} data={props.data} margin={{ top: 5, right: 30, left: 20, bottom: 5}}>
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      { props.dataKeys.map((dataKey, _) => <Line type="monotone" dataKey={dataKey.key} name={dataKey.name} stroke="#8884d8" />) }
      <Tooltip />
      <Legend verticalAlign="top" align="right" layout="vertical" />
      <XAxis dataKey={props.xAxisDataKey} />
      <YAxis />
    </LineChart>
  )
}

export default MyLineChart;
