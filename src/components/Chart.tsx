import MyLineChart from './LineChart';
import MyBarChart from './BarChart';

type ChartProps = {
  chartType: string,
  title: string,
  width: number,
  height: number,
  data: Object[],
  dataKeys: {"key": string, "name": string}[],
  xAxisDataKey: string,
}

type Props = {
  chart: ChartProps
}

function Chart({ chart }: Props) {
  return (
    <div>
      <h1>{chart.title}</h1>
      {chart.chartType == "Line"
        ? <MyLineChart
            width={chart.width}
            height={chart.height}
            data={chart.data}
            dataKeys={chart.dataKeys}
            xAxisDataKey={chart.xAxisDataKey}
          />
        : <MyBarChart
            width={chart.width}
            height={chart.height}
            data={chart.data}
            dataKeys={chart.dataKeys}
            xAxisDataKey={chart.xAxisDataKey}
          />
      }
    </div>
  )
}

export default Chart;
