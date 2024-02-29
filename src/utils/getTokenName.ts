const TOKEN_REPRESENTATIONS: Record<string, string> = {
  "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9":
    "ATOM",
  untrn: "UNTRN",
};

export const getTokenName = (representation: string) =>
  TOKEN_REPRESENTATIONS[representation];
