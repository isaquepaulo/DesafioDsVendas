import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
};

const PieCard = ({ labels = [], name, series = [] }: Props) => {
  return (
    <ReactApexChart
      options={buildPieChartConfig(labels, name)}
      type="donut"
      width="300"
      height="600"
      series={series}
    />
  );
};

export default PieCard;
