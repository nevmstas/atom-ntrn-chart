export interface ISeriesData {
  time: number;
  value: number;
}

export interface ITokenInfoSum {
  minValue: number;
  maxValue: number;
}

export interface ITokenInfo extends ITokenInfoSum {
  series: ISeriesData[];
}

export type ITokens = Record<string, ITokenInfo>;

export interface IResponseData {
  result: {
    data: {
      json: ITokens;
    };
  };
}
