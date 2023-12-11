export type CurrencyName = "INR" | "USD";

export interface CryptoContextType {
  symbol: string;
  setCurrency: React.Dispatch<React.SetStateAction<CurrencyName>>;
  currency: CurrencyName;
}
