"use client";
import {
  IChartDataItem,
  convertPricesToChart,
} from "@/utils/convertPricesToXY";
import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  XYChart,
  Tooltip,
} from "@visx/xychart";
import { Legend } from "..";
import { ITokens } from "@/api/types";
import { useMemo } from "react";

import { withScreenSize } from "@visx/responsive";

interface IChartProps {
  data: ITokens;
}

const accessors = {
  xAccessor: (d: IChartDataItem) => new Date(d.x * 1000),
  yAccessor: (d: IChartDataItem) => d.y,
};

const LINE_COLORS: Record<string, string> = {
  UNTRN: "#31d99c",
  ATOM: "#b8afff",
};

export const getTokenColor = (token: string) => LINE_COLORS[token];

export default withScreenSize(
  ({ data, screenWidth, screenHeight }: IChartProps & any) => {
    const { info, chart } = useMemo(() => convertPricesToChart(data), [data]);

    return (
      <div>
        <XYChart
          height={screenHeight / 3}
          width={screenWidth < 1200 ? screenWidth : screenWidth / 2}
          xScale={{ type: "time" }}
          yScale={{ type: "linear" }}
        >
          <AnimatedAxis
            tickLabelProps={{ fill: "white" }}
            orientation="bottom"
            numTicks={5}
          />
          <AnimatedAxis
            tickLabelProps={{ fill: "white" }}
            tickStroke="text-white"
            orientation="left"
            numTicks={5}
          />
          <AnimatedGrid columns={false} numTicks={5} />

          {Object.keys(chart).map((key) => (
            <AnimatedLineSeries
              key={key}
              dataKey={key}
              className="text-white"
              data={chart[key]}
              colorAccessor={(key) => getTokenColor(key)}
              {...accessors}
            />
          ))}

          <Tooltip
            snapTooltipToDatumX
            snapTooltipToDatumY
            showVerticalCrosshair
            showSeriesGlyphs
            renderTooltip={({ tooltipData, colorScale }) => (
              <div>
                <div>{tooltipData?.nearestDatum?.key}</div>
                {accessors.yAccessor(tooltipData?.nearestDatum?.datum as any)}
              </div>
            )}
          />
        </XYChart>
        <Legend info={info} />
      </div>
    );
  }
);
