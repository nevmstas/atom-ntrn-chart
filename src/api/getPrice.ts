import { encodeJSON } from "@/utils/encode";
import { IResponseData, ITokens } from "./types";

const GET_PRICE_INPUT_JSON = {
  json: {
    tokens: [
      "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
      "untrn",
    ],
    chainId: "neutron-1",
    dateRange: "D7",
  },
};

export const getPrice = async (): Promise<ITokens> => {
  const encodedJSON = encodeJSON(GET_PRICE_INPUT_JSON);

  let responseData: IResponseData;

  try {
    const response = await fetch(
      `https://app.astroport.fi/api/trpc/charts.prices?input=${encodedJSON}`
    );

    responseData = await response.json();
  } catch (e) {
    throw new Error("Failed to fetch prices");
  }

  return responseData.result.data.json;
};
