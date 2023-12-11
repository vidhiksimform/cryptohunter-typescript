export const CoinList = (currency: string) =>
  `${
    import.meta.env.VITE_BASE_URL
  }/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id: string) =>
  `${import.meta.env.VITE_BASE_URL}/${id}`;

export const HistoricalChart = (
  id: string,
  days: number = 365,
  currency: string
) =>
  `${
    import.meta.env.VITE_BASE_URL
  }/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = (currency: string) =>
  `${
    import.meta.env.VITE_BASE_URL
  }/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;
