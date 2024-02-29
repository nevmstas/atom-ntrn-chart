import { ITokenInfoSum, ITokens } from "@/api/types";
import { getAverage } from "./getAverage";
import { getTokenName } from "./getTokenName";

export interface IChartDataItem {
  x: number;
  y: number;
}

export type IChartTokens = Record<string, IChartDataItem[]>;
export type IInfoTokens = Record<string, ITokenInfoSum & { average: number }>;

export const convertPricesToChart = (
  tokens: ITokens
): {
  chart: IChartTokens;
  info: IInfoTokens;
} => {
  const result: {
    chart: IChartTokens;
    info: IInfoTokens;
  } = {
    chart: {},
    info: {},
  };

  for (const [token, values] of Object.entries(tokens)) {
    result.chart[getTokenName(token)] = values.series.map(
      ({ time, value }) => ({
        x: time,
        y: value,
      })
    );

    result.info[getTokenName(token)] = {
      maxValue: values.maxValue,
      minValue: values.minValue,
      average: getAverage(values.minValue, values.maxValue),
    };
  }

  return result;
};
