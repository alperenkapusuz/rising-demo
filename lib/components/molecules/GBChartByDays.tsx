import React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { COLOR } from '@/lib/constants/color';
import { InterFont } from '@/lib/providers/theme';

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
      sx={
        {

"& .MuiChartsGrid-line": {
  stroke: "rgba(0, 0, 0, 0.05)",
},
       "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
        fill:"rgba(0, 0, 0, 0.4)",
        fontSize: "12px",
        fontWeight: "400",
        fontFamily: InterFont.style.fontFamily,
       },
       "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel":{
           fontFamily: InterFont.style.fontFamily,
        },
        "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
            strokeWidth:"0.5",
            fill:"rgba(0, 0, 0, 0.4)",
            fontFamily: InterFont.style.fontFamily,
         },
         "& .MuiChartsAxis-bottom .MuiChartsAxis-line":{
          stroke:"rgba(0, 0, 0, 0.2)",
         },
         "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tick": {
          stroke: "transparent",
         },
         "& .MuiChartsAxis-left .MuiChartsAxis-line":{
          stroke:"transparent",
         }
      }}
      slotProps={{
        popper: {
          sx: {
            ["& .MuiChartsTooltip-mark"]: {
              display: "none"
            },
            ["& .MuiChartsTooltip-labelCell"]: {
              display: "none"
            },
            ["& .MuiChartsTooltip-markCell"]: {
              display: "none",
            },
            ["& .MuiChartsTooltip-table"]: {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: 0,
            },
            ["& .MuiChartsTooltip-valueCell"]: {
              padding: 0,
            },
          },
        },
      }}
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
