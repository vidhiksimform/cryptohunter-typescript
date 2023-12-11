import { CurrencyName } from "./types.cryptoContext";

export interface ICoins {
  id: string;
  name: string;
  image: string;
  symbol: string;
  price_change_percentage_24h: number;
  current_price: number;
  market_cap: string;
}

export interface ICoinInfo {
  id: string;
  image: Record<"thumb" | "small" | "large", string>;
  name: string;
  description: {
    en: string;
  };
  market_cap_rank: string;
  market_data: {
    market_cap: Record<CurrencyName, string>;
    current_price: Record<CurrencyName, string>;
  };
}
