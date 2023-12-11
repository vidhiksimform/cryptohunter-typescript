import { createContext, useContext, useEffect, useState } from "react";
import { CryptoContextType, CurrencyName } from "./types.cryptoContext";

const Crypto = createContext<CryptoContextType | null>(null);

const CryptoContext: React.FC<React.ReactNode> = ({ children }) => {
  const [currency, setCurrency] = useState<CurrencyName>("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else setSymbol("$");
  }, [currency, symbol]);

  return (
    <Crypto.Provider value={{ currency, symbol, setCurrency }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
