import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { COLOR } from '@/lib/constants/color';

type GBChartByDaysProps = {
  gbData: Array<number>;
};

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const gbs = [1, 2, 3, 4, 5, 10];

const GBChartByDays = (props: GBChartByDaysProps) => {
  const lineChartsParams = {
    series: [
      {
        data: props.gbData,
        showMark: false,
        color: COLOR.text,
      },
    ],

    height: 400,
  };

  const valueFormatter = (v: number | null) => {
    if (v === 0) return '';
    return v + 'GB';
  };

  return (
    <LineChart
      {...lineChartsParams}
      xAxis={[{ data: days, scaleType: 'band' }]}
      yAxis={[
        {
          data: gbs,

          reverse: true,
          scaleType: 'band',
          valueFormatter: (value) => {
            return value + 'GB';
          },
        },
      ]}
      series={lineChartsParams.series.map((series) => ({
        ...series,
        valueFormatter: valueFormatter,
      }))}
      grid={{ horizontal: true }}
    />
  );
};

export default GBChartByDays;
