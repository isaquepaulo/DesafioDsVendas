import { BuildGender } from './types/buildGender';

export const buildSalesByGender = (sales: BuildGender[]) => {
  const labels = sales.map((sale) => sale.gender);
  const series = sales.map((sale) => sale.sum);

  return {
    labels,
    series
  };
};
