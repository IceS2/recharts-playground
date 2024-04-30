import './App.css';
import Chart from './components/Chart';

const chartData = [
  [
    {assetType: 'Table', withOwner: 10, withoutOwner: 5},
    {assetType: 'MLModel', withOwner: 20, withoutOwner: 0},
    {assetType: 'Topic', withOwner: 10, withoutOwner: 15},
    {assetType: 'Dashboard', withOwner: 7, withoutOwner: 53},
  ],
  [
    {date: '2024-01-01', withDescriptionPercentage: 0.5},
    {date: '2024-01-02', withDescriptionPercentage: 0.6},
    {date: '2024-01-03', withDescriptionPercentage: 0.56},
    {date: '2024-01-04', withDescriptionPercentage: 0.78},
    {date: '2024-01-05', withDescriptionPercentage: 0.9},
  ]
]

const chartProps = [
  {
    chartType: 'Bar',
    title: 'Data Assets Ownership Overview',
    width: 800,
    height: 400,
    data: chartData[0],
    dataKeys: [
      {key: 'withOwner', name: 'With Owner'},
      {key: 'withoutOwner', name: 'Without Owner'}
    ],
    xAxisDataKey: 'assetType'
  },
  {
    chartType: 'Line',
    title: 'Data Asset Description Evolution',
    width: 800,
    height: 400,
    data: chartData[1],
    dataKeys: [
      {key: 'withDescriptionPercentage', name: 'Complete Description %'}
    ],
    xAxisDataKey: 'date',
  }
]

function App() {
  return (
    <div>
      <Chart chart={chartProps[0]}></Chart>
      <Chart chart={chartProps[1]}></Chart>
    </div>
  );
}

export default App;
