import { useEffect, useState } from 'react';
import { makeRequest } from '../../utils/request';

import './styles.css';

import { buildChartSeries, sumSalesByGender } from './helpers';

import { buildSalesByGender } from '../../helpers';
import PieCard from '../PieCard';
import { formatPrice } from '../../utils/formaters';
import { ChartSeriesData } from '../../types/seriesData';
import { SalesByGender } from '../../types/salesByGender';
import { PieChartConfig } from '../../types/piechardConfig';
import { BuildGender } from '../../types/buildGender';

type Props = {
  filterStore?: number;
};

function SalesByStore({ filterStore }: Props) {
  const [chartSeries, setChartSeries] = useState<ChartSeriesData[]>([]);
  const [totalSum, setTotalSum] = useState(0);
  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();

  useEffect(() => {
    makeRequest.get<SalesByGender[]>(`/sales/by-gender?storeId=${filterStore}`).then((response) => {
      const newChartSeries = buildChartSeries(response.data);
      setChartSeries(newChartSeries);
      const newTotalSum = sumSalesByGender(response.data);
      setTotalSum(newTotalSum);
    });
  }, [filterStore]);

  useEffect(() => {
    makeRequest.get<BuildGender[]>(`/sales/by-gender?storeId=${filterStore}`).then((response) => {
      const newbuildSalesByGender = buildSalesByGender(response.data);
      setSalesByGender(newbuildSalesByGender);
    });
  }, [filterStore]);

  return (
    <div className="main-card-container base-card">
      <div className="row teste w-100 space">
        <div className="col-lg-6 total-sales-container">
          <h2>{formatPrice(totalSum)}</h2>
          <p>Total de vendas</p>
        </div>
        <div className="col-lg-6 pie-card-container">
          <PieCard name="" labels={salesByGender?.labels} series={salesByGender?.series} />
        </div>
      </div>
    </div>
  );
}

export default SalesByStore;
